const path = require("path");
const orders = require(path.resolve("src/data/orders-data")); // Use the existing order data
const nextId = require("../utils/nextId");  // Use this function to assigh ID's when necessary

/********************/
// searches for a specific order in the data
function orderExists(req, res, next){
  const orderId = req.params.orderId;
  const foundOrder = orders.find((order)=> order.id === orderId);
  if(foundOrder){
    res.locals.order = foundOrder;
    next();
  } else {
    next({
      status: 404, 
      message: `Order # ${orderId} was not found.`
    })
  }
}
// validates input data 
function bodyDataHas(propertyName) {
  return function parser(req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({ status: 400, message: `Must include a ${propertyName}` });
  };
}

// validates the order's dishes
function orderHasDishes(req, res, next){
  const {data: {dishes} = {} } = req.body;
  let index = 0;
  if(!dishes) next({status: 400, message: `Order must include a dish`})
  else if(typeof(dishes)!== "object" || dishes.length < 1)next({status: 400, message: `Order must include at least one dish`})
  else{
    let arr = [];
    for(index; index < dishes.length; index++){
      let current = dishes[index];
      if(!Number.isInteger(current.quantity))
        next({
          status: 400,
          message: `Dish ${index} must have a quantity that is an integer greater than 0`
        });
      else{
        current = JSON.parse(JSON.stringify(current));
        if(!current.quantity || current.quantity === 0)
         next({
            status: 400,
            message: `Dish ${index} must have a quantity that is an integer greater than 0`
          });
        else {arr.push(current)}
      }
      
    }
  req.dishes = arr;
  next();
  }
}
// validates the order's delivery status
function orderStatus(req, res, next){
  const {data: {status} = {} } = req.body;
  const validStatus = ["pending", "preparing", "out-for-delivery",  "delivered"];
  if (status && validStatus.includes(status)) {
    if(res.locals.order.status === "delivered")
    next({
      status: 400, 
      message: `A delivered order cannot be changed`
    });
    else return next();
  } else{
    next({
      status: 400, 
      message: `Order must have a status of pending, preparing, out-for-delivery, delivered`
    });
  }  
}
// checks the dish's id matches the route id
function matchingID(req, res, next){
  const {orderId} = req.params;
  const {data: {id} = {} } = req.body;

  if(!id) next();
  else if(orderId !== id)
    next({
      status: 400, 
      message: `Dish id does not match route id. Dish: ${id}, Route: ${orderId}`
    })
  else next();
}
/********************/
// GET /orders
// This route will respond with a list of all existing order data.
function list(req, res){
  res.json({data: orders})
}
// POST /orders
// This route will save the order and respond with the newly created order.
function create(req, res){
  let {data: {deliverTo, mobileNumber, status, dishes} = {} } = req.body;
  let newOrder = {
    id:nextId(), deliverTo, mobileNumber, status, dishes:req.dishes
  }
  orders.push(newOrder);
  res.status(201).json({data: newOrder});
}
// GET /orders/:orderId
// This route will respond with the order where id === :orderId or return 404 if no matching order is found.
function read(req, res){
  res.status(200).json({data: res.locals.order});
}
// PUT /orders/:orderId
// This route will update the order where id === :orderId, or return 404 if no matching order is found.
function update(req, res){
  let existingOrder = res.locals.order;
  const {data: {deliverTo, mobileNumber, status, dishes=[]} = {} } = req.body;

  // update the existing data
  existingOrder.deliverTo = deliverTo;
  existingOrder.mobileNumber = mobileNumber;
  existingOrder.status = status;
  existingOrder.dishes = dishes;

  res.status(200).json({data: existingOrder});
}
// DELETE /orders/:orderId
// This route will delete the order where id === :orderId, or return 404 if no matching order is found.
function destroy(req, res, next){
  const {orderId} = req.params;
  const foundIndex = orders.findIndex((order)=> order.id === orderId);
  if(foundIndex !== -1) {
    if(orders[foundIndex].status !== "pending")
      next({
        status: 400, 
        message: `An order cannot be deleted unless it is pending.`
      });
    else{
      let deletedOrder = orders.splice(foundIndex, 1);
      res.sendStatus(204);
    }
  }
}
/********************/
module.exports={
  create:[
    bodyDataHas("deliverTo"),
    bodyDataHas("mobileNumber"),
    orderHasDishes,
    create
  ],  
  list, 
  read: [orderExists, read],
  update:[
    orderExists,
    bodyDataHas("deliverTo"),
    bodyDataHas("mobileNumber"),
    bodyDataHas("status"),
    orderHasDishes,
    orderStatus,
    matchingID,
    update
    ],
  destroy: [orderExists,destroy]
};

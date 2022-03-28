const path = require("path");
const dishes = require(path.resolve("src/data/dishes-data")); // Use the existing dishes data
const nextId = require("../utils/nextId");  // Use this function to assign ID's when necessary

/********************/
// searches for a specific dish in the data
function dishExists(req, res, next){
  const {dishId} = req.params;
  const foundDish = dishes.find((dish)=> dish.id === dishId);
  if(foundDish){
    res.locals.dish = foundDish;
    next();
  } else {
    next({
      status: 404, 
      message: `No dish with id # ${dishId} was found.`
    })
  }
}
// validates input data 
function bodyDataHas(propertyName) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({ status: 400, message: `Must include a ${propertyName}` });
  };
}
// validates the dish's price 
function dishIsPriced(req, res, next){
  const {data: {price} ={}} = req.body;

  if(!price)  
    next({
      status: 400, 
      message: `Dish must include a price`
    })
  else if(!Number.isInteger(price) || price < 1)
    next({
      status: 400, 
      message: `Dish must have a price that is an integer greater than 0.`
    })
  else next();
}
// checks the dish's id matches the route id
function matchingID(req, res, next){
  const {dishId} = req.params;
  const {data: {id} = {} } = req.body;

  if(!id) next();
  else if(dishId !== id)
    next({
      status: 400, 
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`
    })
  else next();
}
/********************/
// GET /dishes
// This route will respond with a list of all existing dish data.
function list(req, res){
  res.json({data: dishes});
}
// POST /dishes
// This route will save the dish and respond with the newly created dish.
function create(req, res){
  const {data: {name, description, price, image_url} ={} } = req.body;
  const newDish = {
    id:nextId(), name, description, price, image_url
  }
  dishes.push(newDish);
  res.status(201).json({data: newDish});
}
// GET /dishes/:dishId
// This route will respond with the dish where id === :dishId or return 404 if no matching dish is found.
function read(req, res){
  //const dishId = Number(req.params.dishId);
  res.status(200).json({data: res.locals.dish})
}
// PUT /dishes/:dishId
// This route will update the dish where id === :dishId or return 404 if no matching dish is found.
function update(req, res, next){
  let existingDish = res.locals.dish;
  const {data: {id, name, description, price, image_url} = {} } = req.body;
 
  // update the dish's data
  existingDish.id = id;
  existingDish.name = name; 
  existingDish.description = description; 
  existingDish.price = price; 
  existingDish.image_url = image_url; 

  res.status(200).json({data: existingDish});
}
/********************/
module.exports={
  create:[
          bodyDataHas("name"),
          bodyDataHas("description"),
          bodyDataHas("price"),
          dishIsPriced,
          bodyDataHas("image_url"),
          create
        ],
  list, 
  read: [dishExists, read],
  update: [
          dishExists,
          dishIsPriced,
          bodyDataHas("name"),
          bodyDataHas("description"),
          bodyDataHas("price"),
          bodyDataHas("image_url"),
          matchingID,
          update, 
        ],
};
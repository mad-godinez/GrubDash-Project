## Input Validation:
### Dishes
**POST** method: success(status: 201), error(status: 400)
      <table>
        <tr>
          <th>Validation</th><th>	Error message</th>
        </tr>
        <tr>
        <td>`name` property is missing</td><td>Dish must include a name</td>
        </tr>
        <tr>
          <td>`name` property is empty ""</td> <td>	Dish must include a name</td>
        </tr>
        <tr>
          <td>`description` property is missing</td><td>	Dish must include a description</td>
        </tr>
        <tr>
          <td>`description` property is empty "" </td><td>	Dish must include a description</td>
        </tr>
        <tr>
          <td>`price` property is missing</td><td>	Dish must include a price</td>
        </tr>
        <tr>
          <td>`price` property 0 or less</td><td>	Dish must have a price that is an integer greater than 0</td>
        </tr>
        <tr>
          <td>`price` property is not an integer</td><td>	Dish must have a price that is an integer greater than 0</td>
        </tr>
          <td>`image_url` property is missing</td><td>	Dish must include a image_url</td>
        </tr>
        <tr>
          <td>`image_url` property is empty ""</td><td>Dish must include a image_url</td>
        </tr>
      </table>
<br />
**PUT** method: success(status: 200), error(status: 404)
    <table>
      <tr>
        <th>Validation</th><th>	Error message</th>
      </tr>
      <tr>
        <td>`:dishId` does not exist</td><td>Dish does not exist: ${dishId}.</td>
        </tr>
        <tr>
        <td>`id` in the body does not match `:dishId` in the route</td>
        <td>Dish id does not match route id. Dish: ${id}, Route: ${dishId}</td>   
    </tr>
    </table>
<br />

  ### Orders
**POST** method: success(status: 201), error(status: 400)
    <table>
      <tr>
        <th>Validation</th><th>	Error message</th>
      </tr>
      <tr>
      <td>`deliverTo` property is missing</td><td>Order must include a deliverTo</td>
      </tr>
      <tr>
        <td>`deliverTo` property is empty ""</td> <td>Order must include a deliverTo</td>
      </tr>
      <tr>
        <td>`mobileNumber` property is missing</td><td>	Order must include a mobileNumber</td>
      </tr>
      <tr>
        <td>`mobileNumber` property is empty "" </td><td>	Order must include a mobileNumber</td>
      </tr>
      <tr>
        <td>`dishes` property is missing</td><td>	Order must include a dish</td>
      </tr>
      <tr>
        <td>`dishes` property 0 or less</td><td>Order must include at least one dish</td>
      </tr>
      <tr>
        <td>`dishes` property is not an array</td><td>Order must include at least one dish</td>
      </tr>
        <td>a dish `quantity` property is missing</td><td>Dish ${index} must have a quantity that is an integer greater than 0</td>
      </tr>
      <tr>
        <td>a dish `quantity` property is zero or less</td><td>	Dish ${index} must have a quantity that is an integer greater than 0</td>
      </tr>
      <tr>
        <td>a dish `quantity` property is not an integer</td><td>Dish ${index} must have a quantity that is an integer greater than 0</td>
      </tr>
    </table>
<br />
**PUT** method: success(status: 200), error(status: 404)
    <table>
      <tr>
        <th>Validation</th><th>	Error message</th>
      </tr>
      <tr>
        <td>`id` of body does not match `:orderId` from the route</td>
        <td>Order id does not match route id. Order: ${id}, Route: ${orderId}.</td>
      </tr>
      <tr>
        <td>`status` property is missing</td>
        <td>Order must have a status of pending, preparing, out-for-delivery, delivered</td>   
      </tr>
      <tr>
        <td>`status` property is empty</td>
        <td>Order must have a status of pending, preparing, out-for-delivery, delivered</td>   
      </tr>
      <tr>
        <td>`status` property of the existing order === "delivered"</td>
        <td>A delivered order cannot be changed</td>   
      </tr>
    </table>
<br />
**PUT** method: success(status: 200), error(status: 404)
    <table>
      <tr>
        <th>Validation</th><th>	Error message</th>
      </tr>
      <tr>
        <td>`status` property of the order !== "pending"</td>
        <td>An order cannot be deleted unless it is pending</td>
      </tr>
    <table>

	
## Tasks:

1. In the `src/dishes/dishes.controller.js` file, add handlers and middleware functions to create, read, update, and list dishes. Note that dishes cannot be deleted.
2. In the `src/dishes/dishes.router.js` file, add two routes: `/dishes` and `/dishes/:dishId`. Attach the handlers (create, read, update, and list) exported from `src/dishes/dishes.controller.js`.
3. In the `src/orders/orders.controller.js` file, add handlers and middleware functions to create, read, update, delete, and list orders.
4. In the `src/orders/orders.router.js` file, add two routes: `/orders` and `/orders/:orderId`. Attach the handlers (create, read, update, delete, and list) exported from `src/orders/orders.controller.js.`
5. Anytime you need to assign a new `id` to an order or dish, use the `nextId` function exported from `src/utils/nextId.js.`

### Requirements:

- All tests are passing in Qualified.
- All middleware and handler functions have a single responsibility and are named functions.
- All data passed between middleware and handler functions uses response.locals.
- All chained method calls on a route(...) end with all(methodNotAllowed).
- All update handlers guarantee that the id property of the stored data cannot be overwritten.
  
### Files
File path	Description
- `src/app.js`	Contains the Express application. You will not need to make changes to this file.
- `src/data/dishes-data.js`	Contains the dishes data. This is the shape of the dish data that the API will send and receive. You can add or remove dishes if you like.
- `src/data/orders-data.js`	Contains the orders data. This is the shape of the order data that the API will send and receive. You can add or remove orders if you like.
- `src/dishes/dishes.controller.js`	Add middleware and handlers for dishes to this file, then export the functions for use by the router.
- `src/dishes/dishes.router.js`	Add routes and attach handlers to the router exported by this file.
- `src/errors/errorHandler.js`	Exports the error handler function for use by the Express application.
- `src/errors/methodNotAllowed.js`	Exports the 405 Method Not Allowed handler function for use by the Express application.
- `src/errors/notFound.js`	Exports the 404 Not Found handler function for use by the Express application.
- `src/orders/orders.controller.js`	Add middleware and handlers for orders to this file, then export the functions for use by the router.
- `src/orders/orders.router.js`	Add routes and attach handlers to the router exported by this file.
- `src/server.js`	Contains the server code. You will not need to make changes to this file.
- `src/utils/nextId.js`	Exports the nextId function. Use this function anytime you need to assign a new id. You will not need to make changes to this file.
- `test/dishes-router.test.js`	Tests for the dishes router. You will not need to make changes to this file.
- `test/order-router.test.js`	Tests for the orders router. You will not need to make changes to this file.
- `test/make-test-app.js`	Function used by the tests. You will not need to make changes to this file. 

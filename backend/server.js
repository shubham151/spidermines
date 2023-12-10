//App or Server.js
const PORT = 3000;
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
// const addProduct = require('./src/routes/addProduct-route');
const shopRoute = require('./src/routes/shop-route');
const addProduct = require('./src/routes/addProduct-route');


// const routes = require('./src/routes/index');
//Use allows us to add new middleware function

//Middleware 1
server.use(bodyParser.urlencoded({extended: false}));
server.use((req, res, next) => {
    console.log("Time: ",Date.now());
    next();  //Allows the request to move to next middleware
});


//Middleware 2
server.use(shopRoute)
server.use(addProduct)


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

//jwt token
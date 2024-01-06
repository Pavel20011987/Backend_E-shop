const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routers/products');
//const orderItemsRouter = require('./routers/o')

//routes

const categoriesRoutes = require('./routers/categories');
//const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/user');
const ordersRoutes = require('./routers/orders');
const errorHandler = require('./helpers/error-handler');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const api = process.env.API_URL;
app.use(cors());
app.options('*', cors());
//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);





app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);
app.use



//const Product = require('./models/products');


mongoose.connect(process.env.CONNECTION_STRING, {
        dbName: '4dtfqty'

    })
    .then(() => {
        console.log('Database Connection is ready...');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routers/products');

//routes

const categoriesRoutes = require('./routers/categories');
//const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/user');
const ordersRoutes = require('./routers/orders');

require('dotenv/config');

const api = process.env.API_URL;
app.use(cors());
app.options('*', cors());
//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));





app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);



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
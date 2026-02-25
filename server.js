// const http = require('http')

const express = require('express');
const bodyParser = require('body-parser') // npm install body-parser
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); // allows request to continue to te next middleware line
//     })

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page notu found</h1>');
})
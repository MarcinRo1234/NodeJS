const express = require('express');
const path = require('path')
const Router = express.Router();

const rootDir = require('../util/path')

//admin/add-product => GET
Router.get("/add-product", (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit"></button></form>');
    // next()
    res.sendFile(path.join(rootDir, 'Views', 'add-product.html'))
})

//admin/add-product => POST
Router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.export = Router;
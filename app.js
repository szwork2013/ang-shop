var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev')); 

app.use(express.static(__dirname + "/src"));

app.get('/api/getCategorysList', function(req, res) {
    res.sendFile(__dirname + '/src/data/categorys.json'); 
});

app.get('/api/getSubCategoryList', function(req, res) {
    res.sendFile(__dirname + '/src/data/sub/' + req.query.category + '-category-list.json'); 
});

app.get('/api/getProductsInfo', function(req, res) {
    res.sendFile(__dirname + '/src/data/products/' + req.query.category +'/' + req.query.subCategory + '.json');
    // console.log('path:  '+__dirname + '/src/data/products/' + req.query.category +'/' + req.query.subCategory + '.json');
});
app.listen(8080);
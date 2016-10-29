var Product = require('../controllers/products')
var Order = require('../controllers/orders')
var Customer = require('../controllers/customers')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/products', Product.index);
  app.post('/products/', Product.create);
  app.delete('/products/:id', Product.delete);
  app.get('/customers', Customer.index);
  app.post('/customers', Customer.create);
  app.delete('/customers/:id', Customer.delete);
  app.get('/orders', Order.index);
  app.post('/orders', Order.create);
  app.get('/products/recent', Product.recent);
  app.get('/orders/recent', Order.recent);
  app.get('/customers/recent', Customer.recent)
}

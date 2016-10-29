var Order = require('../models/order');
var Product = require('../models/product');
var Customer = require('../models/customer');


module.exports = {
	index: function(req, res){
		Order.find({})
		.populate('_customer _product')
		.exec(function(err, orders){
			if (err) {
				res.json(err);
			}
			else {
				res.json(orders);
			}
		})

	},
	create: function(req, res){
		console.log(req.body);
		var quantityRequested = parseInt(req.body.quantity);
		var productID = req.body._product;

		Product.isQuantityAvailable(quantityRequested, productID, function(result){
			if (result){
				Order.create(req.body, function(err, order){
					if (err) {
						res.json(err);
					}
					else {
						res.json(order);
					}
				});
			}
			else {
				console.log("consolelog says something happened");
				res.json("Sorry, we could not process your order, please check the Products page to view the quanitity available of the product you are trying to order");
			}
		});
	},
	recent: function(req, res){
		Order.find({})
		.sort('-createdAt')
		.populate('_customer _product')
		.limit(3)
		.exec(function(err, result){
			res.json(result);
		})
	}
}
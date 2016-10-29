var Product = require('../models/product');

module.exports = {
	index: function(req, res){
		Product.find({}, function(err, products){
			if (err){
				res.json(err);
			}
			else {
				res.json(products);
			}
		})
	},
	create: function(req, res){
		Product.create(req.body, function(err, product){
			if (err) {
				res.json(err);
			}
			else {
				res.json(product);
			}
		})
	},
	delete: function(req, res){
		Product.remove({_id: req.params.id}, function(err){
			if (err){
				res.json(err);
			}
			else {
				res.json(true);
			}
		})
	},
	recent: function(req, res){
		Product.find({})
		.sort('-createdAt')
		.limit(3)
		.exec(function(err, results){
			res.json(results);
		})
	}
}
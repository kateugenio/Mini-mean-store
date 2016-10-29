var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ProductSchema = new Schema({
	name: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 3},
	imageUrl: {type: String},
	quantity: {type: Number, required: true, min: 1}
}, {timestamps: true});

ProductSchema.statics.isQuantityAvailable = function(quantityRequested, productID, callback){
	this.findById(productID, function(err, product){
		if (product.quantity >= quantityRequested){
			product.quantity -= quantityRequested;
			product.save(function(){
				callback(true);
			})
		}
		else {
			callback(false);
		}
	})
}


module.exports = mongoose.model("Product", ProductSchema);
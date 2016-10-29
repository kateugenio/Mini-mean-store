var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('../models/product');
require('../models/customer');


var OrderSchema = new Schema({
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	_product: {type: Schema.Types.ObjectId, ref: 'Product'},
	quantity: {type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Order", OrderSchema);
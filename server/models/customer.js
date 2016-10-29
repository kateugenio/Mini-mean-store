var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CustomerSchema = new Schema({
	name: {type: String, required: true, minlength: 3}
}, {timestamps: true});

module.exports = mongoose.model("Customer", CustomerSchema);
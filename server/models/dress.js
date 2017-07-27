var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DressSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    image: { type: String},
    name:  { type: String, required: true, minlength: 6},
    price: { type: String, required: true},
    description: {type: String}
})
mongoose.model("Dress", DressSchema);

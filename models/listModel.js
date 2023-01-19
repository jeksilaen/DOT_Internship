const mongoose = require('mongoose');
const {itemSchema} = require('../models/itemModel')


const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});

const List = mongoose.model('List', listSchema);


module.exports = List
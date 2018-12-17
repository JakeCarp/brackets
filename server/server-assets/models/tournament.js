let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Tournament"



let schema = new Schema({
  champion: { type: ObjectId, ref: 'Entry', required: true },


})


module.exports = mongoose.model(schemaName, schema)
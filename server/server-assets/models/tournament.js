let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Tournament"



let schema = new Schema({
  title: { type: String, required: true },
  style: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: ObjectId, ref: 'User' },
  entrycode: { type: String, required: true, unique: true },
<<<<<<< HEAD
  entryId: [{ type: ObjectId, ref: 'Entry' }],
  bracket: {},
  // status: { type: Boolean,  }
=======
<<<<<<< HEAD
  bracket: {}
=======
  entryId: { type: ObjectId, ref: 'Entry' },
>>>>>>> c2205814e7f31194253490a8a1b46af5d3179418
>>>>>>> 1131ec1c689ba5adedb1338fec14c8fda5fe946a
})


module.exports = mongoose.model(schemaName, schema)
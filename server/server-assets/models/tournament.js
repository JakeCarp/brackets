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
  bracket: {},
  entryId: { type: ObjectId, ref: 'Entry' },
=======
  entryId: [{ type: ObjectId, ref: 'Entry' }],
  bracket: {},
  status: { type: Boolean, default: true }
>>>>>>> 92cda73a437ea0e5a37490afc0caaf5e97e40052
})


module.exports = mongoose.model(schemaName, schema)
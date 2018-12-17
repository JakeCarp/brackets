let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Round"



let schema = new Schema({
  winners: { type: ObjectId, ref: 'Entry', required: true },
  losers: { type: ObjectId, ref: 'Entry', required: true },
  tournamentId: { type: ObjectId, ref: 'Tournament', required: true }
})


module.exports = mongoose.model(schemaName, schema)
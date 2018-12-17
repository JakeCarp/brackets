let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Match"



let schema = new Schema({
  roundId: { type: ObjectId, ref: 'Round', required: true },
  winner: { type: ObjectId, ref: 'Entry' },
  loser: { type: ObjectId, ref: 'Entry' },
  completed: { type: String, required: true },
  tournamentId: { type: ObjectId, ref: 'Tournament', required: true }
})


module.exports = mongoose.model(schemaName, schema)
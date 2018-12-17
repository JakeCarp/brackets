let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Entry"

let schema = new Schema({
  name: { type: String, required: true },
  members: { type: ObjectId, ref: 'User', required: true },
  wins: { type: Number },
  draws: { type: Number },
  losses: { type: Number },
  tournamentId: { type: ObjectId, ref: 'Tournament' },
  matchId: { type: ObjectId, ref: 'Match' },
  standing: { type: String }
})


module.exports = mongoose.model(schemaName, schema)
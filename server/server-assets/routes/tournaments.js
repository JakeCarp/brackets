let router = require('express').Router()
let Tournaments = require('../models/tournament')
let Entries = require('../models/entry')
let robin = require("roundrobin")

//get a Tournament by Id
router.get('/:tournamentId', (req, res, next) => {
  Tournaments.find({ _id: req.params.tournamentId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err)
      next()
    })
})

//create a tournament
router.post('/', (req, res, next) => {
  req.body.owner = req.session.uid
  Tournaments.create(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//update a tournament
router.put('/:tournamentId', (req, res, next) => {
  Tournaments.findById({ _id: req.params.tournamentId })
    .then(tournament => {
      if (!tournament.owner.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      tournament.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//delete a tournament 
router.delete('/:tournamentId', (req, res, next) => {
  Tournaments.findById(req.params.tournamentId)
    .then(tournament => {
      if (!tournament.owner.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      tournament.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted")
      });
    })
})

//get entries by tournamentId
router.get('/:tournamentId/entries', (req, res, next) => {
  Tournaments.findById(req.params.tournamentId)
    .then(activeTournament => {
      Entries.find({ tournamentId: req.params.tournamentId })
        .then(data => {
          if (activeTournament.style != "roundRobin") {
            res.send(data)
          }
          res.send(robin(data.length, data))
        })
        .catch(err => {
          console.log(err)
          next()
        })
    })
})

//get a tournament by an entry code
router.get('/join/:entryCode', (req, res, next) => {
  Tournaments.findOne({ entrycode: req.params.entryCode })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})
module.exports = router
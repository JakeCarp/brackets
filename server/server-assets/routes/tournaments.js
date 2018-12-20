let router = require('express').Router()
let Tournaments = require('../models/tournament')
let Entries = require('../models/entry')
let robin = require("roundrobin")

//get a Tournament by Id
router.get('/:tournamentId', (req, res, next) => {
  Tournaments.findOne({ _id: req.params.tournamentId })
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
          if (activeTournament.style == "Single-Elimination" || activeTournament.style == "Double-Elimination") {
            res.send(data)
            next()
          }
          if (activeTournament.style == "Round-Robin-Split") {
            let group1 = []
            let group2 = []
            let out = []
            for (let i = 1; i < data.length - 1; i++) {
              const entry = data[i];
              if (i % 2) {
                group1.push(entry)
              } else {
                group2.push(entry)
              }
            }
            out.push(robin(group1.length, group1))
            out.push(robin(group2.length, group2))
            res.send(out)
          }
          if (activeTournament.style === "Round-Robin") {
            res.send(robin(data.length, data))
          }
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


//Get tournaments by userID
module.exports = router
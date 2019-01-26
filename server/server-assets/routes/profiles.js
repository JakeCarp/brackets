let router = require('express').Router()
let Users = require('../models/user')


//update user bio/picture
router.put('/:userId', (req, res, next) => {
  Users.findOne({ _id: req.params.userId })
    .then(user => {
      user.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
        }
        res.send("Successfully Updated")
      })
    })
    .catch(err => {
      console.log(err)
      next()
    })
})
module.exports = router
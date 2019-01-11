var express = require('express');
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = 3000
// var socketServer = new (require('http').Server)(server);
// var io = require('socket.io')(socketServer);

// socketServer.listen(80)

// server.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
// //socket implementation
// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('YEEET!', function (data) {
//     console.log(data)
//   })
// })


var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))




//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR AUTH ROUTES BEFORE YOUR GATEKEEPER, OTHERWISE YOU WILL NEVER GET LOGGED IN
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use(auth.router)


//Gate Keeper Must login to access any route below this code
server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

//ROUTES!
let tournamentRoutes = require('./server-assets/routes/tournaments')
server.use('/api/tournament', tournamentRoutes)
let entryRoutes = require('./server-assets/routes/entries')
server.use('/api/entry', entryRoutes)








//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})
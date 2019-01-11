class Socket {
  constructor(io) {
    let connectedUsers = {}
    let rooms = {}

    io.on("connection", socket => {
      console.log("User Connected");

      //notify controller of successful connection
      socket.emit("CONNECTED", {
        socket: socket.id,
        message: "successfully connected",
        openRooms: Object.keys(rooms)

      })

      socket.on("join", data => {
        //insure connection passed name
        if (data.name, data.room) {
          //attaches name to socket
          socket.user = data.name;

          //add connection to room
          socket.join(data.room);

          //adds user to connectedUsers
          connectedUsers[data.room] = data.name;

          //notify connection of room connection
          socket.emit("joinedRoom", {
            roomName: data.name,
            connectedUsers: connectedUsers,
          });

          //notify room of new connection
          io.to("tournament").emit("newUser", { userName: data.name });
        }
      });
      //connection leaves room
      socket.on('leave', data => {
        //confirm they were in the room
        if (socket.user) {
          //remove connection from room
          delete connectedUsers[socket.user]
          io.to('tournament').emit('left', socket.user)
        }
      })
      socket.on('message', data => {
        if (data.message && data.user) {
          console.log('message received')
          io.to('tournament').emit('newMessage', data)
        }
      })

      socket.on('newBoard', data => {
        Boards.create(data)
          .then(res => {
            io.to('tournament').emit('boardCreated', res)
          })
      })
    })
  };


}
module.exports = Socket


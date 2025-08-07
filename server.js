const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log("A user Connected");
  socket.on("disconnect", () => {
    console.log("A user is Disconnected");
  });
  socket.on("message",(data)=>{
    console.log(data)
    
  })
});

httpServer.listen(3000, () => {
  console.log("Console is running on 3000");
});

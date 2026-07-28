
const express=require('express');
const http=require('http');
const {Server}=require('socket.io');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const server=http.createServer(app);
const io=new Server(server,{cors:{origin:'*'}});

let onlineUsers=new Set();

io.on('connection',(socket)=>{
  socket.on('join',(user)=>{
    onlineUsers.add(user);
    io.emit('onlineUsers',[...onlineUsers]);
  });

  socket.on('message',(msg)=>{
    io.emit('message',msg);
  });

  socket.on('disconnect',()=>{
    io.emit('onlineUsers',[...onlineUsers]);
  });
});

app.get('/',(_,res)=>res.send('API Running'));
server.listen(5000);

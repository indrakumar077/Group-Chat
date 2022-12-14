const express = require('express');
const app = express();
const http  = require('http').createServer(app);

app.use(express.static(__dirname +'/public'))

app.use('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


const PORT = process.env.PORT || 4001
http.listen(PORT,()=>{
    console.log(PORT)
})

const io = require('socket.io')(http)
    
io.on('connection',(socket)=>{
         socket.on('message',(msg)=>{
            socket.broadcast.emit('message',msg)
         })
    console.log("connected...")
})
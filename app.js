const app = require('./config/server.js')

const sql = require('./config/db.js')

const server = app.listen(3636, ()=>{
    console.log('funciona o servidor')
})

var io = require('socket.io').listen(server)

io.on('connection', (socket)=>{
    socket.on('criar', (room)=>{
        socket.join(room.sala)
    })
    socket.on('lista', (produtos)=>{
        socket.to(produtos.id).emit('dashboard', produtos)
    })
    socket.on('confirmando', (data)=>{
        console.log(data.produto)
        socket.to(data.id).emit('recebendo confirmacao', data)
    })
    socket.on('disconnect', ()=>{
        console.log('desconectado do socket')
    })
})


const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//cada jogador e uma room
io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);

    socket.on("joinRoom", (room) => {
        socket.join(room);
        console.log(`Cliente entrou na sala: ${room}`);
    });
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

function gerarDados() {
    return {
        bpm: Math.floor(Math.random() * (180 - 60 + 1)) + 60,   //60-180 bpm
        velocidade: (Math.random() * 30).toFixed(2),            //0-30 km/h
        posicao: {
            x: Math.floor(Math.random() * 100),                 //simudando campo 100x100
            y: Math.floor(Math.random() * 100),                 
        }
    };
}

//enviar dados a cada 2s para cada room 
setInterval(() => {
    const jogador = "player1"; //exemplo de jogador
    const dados = gerarDados();
    io.to(jogador).emit("dadosSensor", dados);
    console.log("Enviando:", dados);
}, 2000);

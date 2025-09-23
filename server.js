const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Armazena o estado de todos os jogadores conectados
const players = {};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Lógica para quando um novo cliente se conecta
io.on("connection", (socket) => {
    console.log("Novo jogador conectado:", socket.id);

    // Adiciona o novo jogador ao nosso objeto de estado
    players[socket.id] = {
        id: socket.id,
        bpm: 80,
        velocidade: 0,
        posicao: { x: 50, y: 50 } // Posição inicial no centro
    };

    // O socket entra em sua própria "sala" (room), que é seu ID
    socket.join(socket.id);
    console.log(`Jogador ${socket.id} entrou na sua sala.`);

    // Lógica para quando o jogador se desconecta
    socket.on("disconnect", () => {
        console.log("Jogador desconectado:", socket.id);
        delete players[socket.id]; // Remove o jogador do objeto
    });
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});


function simularDados(player) {
    
    let bpmChange = Math.random() * 10 - 5; 
    player.bpm = Math.max(60, Math.min(190, player.bpm + bpmChange)); 

    
    player.velocidade = Math.random() * 35; 

    
    let moveX = Math.random() * 6 - 3; 
    let moveY = Math.random() * 6 - 3;
    player.posicao.x = Math.max(0, Math.min(100, player.posicao.x + moveX)); 
    player.posicao.y = Math.max(0, Math.min(100, player.posicao.y + moveY));

    return {
        id: player.id,
        bpm: Math.round(player.bpm),
        velocidade: player.velocidade.toFixed(2),
        posicao: {
            x: Math.round(player.posicao.x),
            y: Math.round(player.posicao.y)
        }
    };
}


setInterval(() => {
    
    for (const id in players) {
        const player = players[id];
        const dadosAtualizados = simularDados(player);

        
        io.to(id).emit("dadosSensor", dadosAtualizados);
        console.log(`Enviando para ${id}:`, dadosAtualizados);
    }
}, 1000); 
# Simulação de Sensores com Socket.IO

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socket.io&logoColor=white)

Este projeto é uma atividade prática que simula sensores em jogadores de futebol.  
Os dados (batimentos cardíacos, velocidade e posição em campo) são transmitidos em tempo real pelo servidor para os clientes via Socket.IO.

---

## 📂 Estrutura do projeto
sensores_socket.io/
├── index.html # Cliente web simples
├── package.json # Dependências e scripts
└── server.js # Servidor Express + Socket.IO

---

## Tecnologias utilizadas
- **Node.js**  
- **Express**  
- **Socket.IO**  

---

## Como executar

1. Clone este repositório:


git clone https://github.com/fer-oliveiraa/sensores_socket.io.git
cd sensores_socket.io

2. Instale as dependências:

npm install

3. Inicie o servidor:

npm start

4. Acesse no navegador:

http://localhost:3000

## Funcionamento atual
O servidor cria uma conexão via Socket.IO.

O cliente (index.html) se conecta e entra em uma room (exemplo: player1).

O status de conexão é exibido na tela.
# Simulação de Sensores com Socket.IO

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socket.io&logoColor=white)

Este projeto é uma atividade prática que simula sensores em jogadores de futebol, exibindo os dados em uma interface moderna. Os dados (batimentos cardíacos, velocidade e posição) são gerados no servidor e transmitidos em tempo real para cada cliente via Socket.IO, com a movimentação do jogador sendo exibida como um mapa de calor (heatmap).

---

## Estrutura do projeto
sensores_socket.io/<br>
├── index.html # Cliente web com a interface e o heatmap<br>
├── package.json # Dependências e scripts<br>
├── server.js # Servidor Express + Socket.IO<br>
└── .gitignore <br>

---

## Tecnologias utilizadas
- **Node.js**  
- **Express**  
- **Socket.IO**  
- **Heatmap.js**

---

## Como executar

1. Clone este repositório:

```
git clone https://github.com/fer-oliveiraa/sensores_socket.io.git
cd sensores_socket.io
```

2. Instale as dependências:
```
npm install
```
3. Inicie o servidor:
```
npm start
```
4. Acesse no navegador:
```
http://localhost:3000
```
## Funcionalidades
- **Suporte a Múltiplos Jogadores:** Cada cliente que se conecta ao servidor é tratado como um jogador único e independente.
- **Simulação em Tempo Real:** O servidor simula e transmite dados de BPM, velocidade (km/h) e posição (x,y) para cada jogador a cada segundo.
- **Visualização com Heatmap:** A movimentação do jogador no campo é exibida como um mapa de calor que é atualizado em tempo real.
- **Interface Moderna:** A interface foi desenhada para se assemelhar a um aplicativo de monitoramento esportivo.



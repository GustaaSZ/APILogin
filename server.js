import express from 'express'

// Alocando o expresse em app
const app = express()

// Definir a porta do pc que API vai rodar
app.listen(3000, () => console.log("Servidor Rodando 🚀"))
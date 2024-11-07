import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

// Alocando o expresse em app
const app = express()
app.use(express.json())

app.use('/', publicRoutes) // tendo acesso a todas as rotas do publicRoutes
app.use('/', auth, privateRoutes) // tendo acesso a todas as rotas do privateRoutes

// Definir a porta do pc que API vai rodar
app.listen(3000, () => console.log("Servidor Rodando 🚀"))
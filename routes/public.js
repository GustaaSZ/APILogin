import express from 'express'

// Utilizar as rotas
const router = express.Router()

// Cadastro
router.post('/cadastro', (req, res) => {
    // req = request
    // res = response

    const user = req.body // alocando em user os dados da requisição do body

    // Enviando uma resposta -> printando os dados de user
    res.status(201).json(user) // status de criado com sucesso
})

export default router;
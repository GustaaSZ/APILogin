import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

// Utilizar as rotas
const router = express.Router()

// Cadastro
// Usamos o async pra permitir o uso do await
// -> req = request, -> res = response

router.post('/cadastro', async (req, res) => {
   
    // try = caso dê errado...
    try{
        const user = req.body // alocando em user os dados da requisição do body

        const salt = await bcrypt.genSalt(10) // informando o peso da incriptação
        // Alocando em hashPassword a senha que veio da requisição user e passando o peso salt
        const hashPassword = await bcrypt.hash(user.password, salt);

        // Await pede pra esperar pois irá receber uma resposta de um servidor, e não sabemos o time
        const  userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,   
                password: hashPassword, // passando o hashPassword para o DB
            },
        })

        // Enviando uma resposta -> printando os dados de user
        res.status(201).json(userDB) // status de criado com sucesso

        // Tratamos no catch
    } catch(err){
        res.status(500).json({ message: 'Erro no servidor, Tente novamente' })
    }
    

})

export default router;
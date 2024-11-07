import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// ROTA GET - L I S T A R 
router.get('/listar-usuarios', async (req, res) =>{
    try{
        // Acessando o banco de dados
        // Buscando todos os usuários do banco omitindo a senha
        const users = await prisma.user.findMany({ })
        // Resposta
        res.status(200).json( { message: 'usuários listados com sucesso ', users } )
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Erro no Servidor!' })
    }
})

export default router;

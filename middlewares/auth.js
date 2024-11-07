// Arquivo que serve como intermediador para acesso ao servidor de listar-usuários.
// Ao solicitar acesso a rota privada de listar-usuarios (1º precisa-se estar logado, 
// e ao estar logado ele gera um token pro usuário) 
// o servidor então irá passar por esse arquivo auth para verificar se o token é um token válido e se for válido 
// ele da um next pra seguir pro próximo passo que é a rota de /listar-usuarios 
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    // Buscando o token que vem do header authorization
    const token = req.headers.authorization
    
    // Se o token não for válido
    if(!token){
        return res.status(401).json({ message: 'Acesso negado'})
    }

    // Verificação do token
    try{
        // Token decodificado
        const decoded = jwt.verify(token.replace('Bearer ', '' ), JWT_SECRET)
        // console.log(decoded)
        req.userId = decoded.id
        next() // -> serve como impulsionador pra que rode

    } catch(err) {
        return res.status(401).json({ message: 'Token inválido!' })
    }
}

export default auth;
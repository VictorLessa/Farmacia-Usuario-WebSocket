const sql = require('../controllers/sql')
module.exports = (app)=>{
    //rota para pagina de login do usuario
    app.get('/', (req, res)=>{
        res.render('home')
    })
    //rota para validação do usuario
    app.post('/usuario', async(req, res)=>{
        const {nome, senha} = req.body
        if(await sql().login(nome, senha)) {
            res.render('lista')
        }else {
            res.render('home')
        }
    })
    //rota para visualizar todos os usuarios do db de usuarios
    app.get('/all', async (req, res)=>{
        res.send( await sql().all())
    })
    //rota para o login da farmamcia
    app.get('/far', (req, res)=>{
        res.render('loginpha')
    })
    //validação da farmacia
    app.post('/pha', async(req, res, next)=>{
        const {nome, senha} = req.body
        if(await sql().loginphar(nome, senha)){
            res.render('pharmacy')
        }else {
            res.render('loginpha')
        }
        
    })

}
module.exports = (app)=>{
    app.get('/', (req, res, next)=>{
        res.render('home')
        next()
    })
    app.post('/usuario', (req, res, next)=>{
        const {nome, senha} = req.body
        const db = require('../config/db.js')
        db.query('SELECT * FROM login WHERE nome=? and senha =?',[nome, senha], (error, results)=>{
            if (results[0] != undefined) {
                res.render('lista')
            }else {
                res.send('n encontrado')
            }
                            
        })
        
    })
    app.get('/far', (req, res)=>{
        res.render('loginpha')
    })
    app.post('/pha', (req, res, next)=>{
        const {nome, senha} = req.body
        const db = require('../config/db.js')
        db.query('SELECT * FROM farmacias WHERE nome=? and senha =?',[nome, senha], (error, results)=>{
            if (results[0] != undefined) {
                res.render('pharmacy')
            }else {
                res.send('n encontrado')
            }
                            
        })
        
    })
    app.get('lista', (req, res)=>{
        const [produtos] = req.body
        
    })
}
const db = require('../config/db')
const sql = ()=>{
    return {
        home: ()=>{
            return true
        },
        login: (nome, senha)=>{
            return new Promise((resolve, reject)=>{
                db.query("SELECT * FROM login WHERE nome = ? and senha = ?",[nome, senha], (error, results)=>{
                    if(error) {
                        console.log(error)
                    }
                    if(results[0]) {
                        resolve(true)
                    }else{
                        resolve(false)
                    }
                })
            })
        },
        loginphar: (nome, senha)=>{
            return new Promise((resolve, reject)=>{
                db.query("SELECT * FROM farmacias WHERE nome = ? and senha = ?",[nome, senha], (error, results)=>{
                    if(results[0]) {
                        resolve(true)
                    }else {
                        resolve(false)
                    }
                })
            })
        },
        all: ()=>{
            return new Promise((resolve, reject)=>{
                db.query("SELECT * FROM login", (error, results)=>{
                    if(error) {
                        console.log(error)
                    }
                    resolve({ usuarios: results})
                })
            })
        }
    }
}
module.exports = sql
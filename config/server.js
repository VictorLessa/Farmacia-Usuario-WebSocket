const express = require('express')

const bodyParse = require('body-parser')

const consgin = require('consign')


const app = express()

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())


consgin()
    .include('rotas')
    .then('config/db.js')
    .then('modulos')
    .into(app)

app.set('view engine', 'ejs')

module.exports = app
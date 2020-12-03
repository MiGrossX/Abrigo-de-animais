// importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express()
server

// utilizando body do req = corpo do formulário
.use(express.urlencoded({extended: true}))

//utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/abrigo', pages.abrigo)
.get('/abrigos', pages.abrigos)
.get('/create-abrigo', pages.createAbrigo)
.post('/save-abrigo', pages.saveAbrigo)

// ligar o servidor
server.listen(5500)
const express = require('express')
const app = express()
const routeProdutos = require('./routes/routeProdutos')
const routeUsuarios = require('./routes/routeUsuarios')

app.use(express.json())

app.use('/api/products', routeProdutos)
app.use('/api/users', routeUsuarios)

app.use((req, res, next) => {
    res.status(404).json({"message": "Página não encontrada"})
    next()
})

app.listen(3000, () => console.log('Server rodando na porta 3000'))
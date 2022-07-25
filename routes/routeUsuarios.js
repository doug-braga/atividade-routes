const express = require('express')
const routes = express.Router()
let users = require('../consts/usuarios')

routes.get('/', (req, res) => {
    res.status(200).json(users)
})

routes.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)

    if (!user) return res.status(404).json({ "message": "Usuário não encontrado" })

    users = users.filter(user => user.id !== id)

    res.status(200).json(users)
})

routes.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const content = req.body

    const user = users.find(user => user.id === id)

    if (!user) return res.status(404).json({ "message": "Usuário não encontrado" })

    users = users.map(user => {
        if (user.id === id) return { ...user, ...content }
        return user
    })

    res.status(200).json(users)
})

routes.patch('/:id', (req, res) => {
    const id = Number(req.params.id)
    const content = req.body

    const user = users.find(user => user.id === id)

    if (!user) return res.status(404).json({ "message": "Usuário não encontrado" })

    users = users.map(user => {
        if (user.id === id) return { ...user, ...content }
        return user
    })

    res.status(200).json(users)
})

module.exports = routes
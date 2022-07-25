const express = require('express')
let products = require('../consts/produtos')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).json(products)
})

routes.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const product = products.find(product => product.id === id)
    if (!product) return res.status(404).json({ "message": "Produto não encontrado" })

    res.status(200).json(product)
})

routes.post('/', (req, res) => {
    const content = req.body
    let newProducts

    if (Array.isArray(content)) {
        newProducts = [...products, ...content]
    } else {
        newProducts = [...products, content]
    }
    res.status(201).json(newProducts)
})

routes.patch('/:id', (req, res) => {
    const id = Number(req.params.id)
    const content = req.body

    const product = products.find(product => product.id === id)

    if (!product) return res.status(400).json({ "message": 'Produto não encontrado' })

    products = products.map(product => {
        if (product.id === id) return { ...product, ...content }
        return product
    })

    res.status(200).json(products)
})

routes.delete('/:id', (req, res) => {
    const id = Number(req.params.id)

    const product = products.find(product => product.id === id)

    if (!product) return res.status(400).json({ "message": 'Produto não encontrado' })

    products = products.filter(product => product.id !== id)

    res.status(200).json(products)
})

module.exports = routes
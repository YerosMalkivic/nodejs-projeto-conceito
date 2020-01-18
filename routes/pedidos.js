const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    });
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Cria um pedido'
    })
});

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id: id
    })
    
})

// DELETA UM PEDIDO
router.delete('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(201).send({
        mensagem: 'Deleta o pedido',
        id: id
    })
});

module.exports = router;
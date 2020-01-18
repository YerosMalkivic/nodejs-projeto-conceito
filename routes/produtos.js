const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET rota produtos'
    });
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o POST rota produtos'
    })
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Usando o GET de ID produto',
        id: id
    })
    
})

// ATUALIZA UM PRODUTO
router.patch('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(201).send({
        mensagem: 'Usando o PATCH de ID produto',
        id: id
    })
});

// DELETA UM PRODUTO
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(201).send({
        mensagem: 'Usando o DELETE de ID produto',
        id: id
    })
});

module.exports = router;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: ' Olá mundo, esse é meu novo repositório clonado' })
})

app.listen(4001, () => {
    console.log('Api inicializando na porta 4001');
})
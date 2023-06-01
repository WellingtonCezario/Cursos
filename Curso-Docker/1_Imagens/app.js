const express = require('express')
const app = express()
const port = 3002

app.get('/', (req,res) =>{
    res.send('Olá, minha primeira imagem!!')
})

app.listen(port,()=>{
    console.log('Executando na porta ' + port)
})
//passos para montar o servidor com a biblioteca express



const express = require("express"); //importar a biblioteca express

const app = express();// instanciar a função

const usuarios = [{
    id: 11, nome: 'joao', idade: 23
}, {
    id: 2, nome: 'maria', idade: 18
}, {
    id: 4, nome: 'ana', idade: 30
}, {
    id: 1, nome: 'rodrigo', idade: 17
}, {
    id: 123, nome: 'pedro', idade: 19
},
]

//criar uma função de recebimento da requeisição e resposta para a reuisição com o método get
app.get("/usuarios", (req, res) => {

    res.send(usuarios)
})

// mandar o servidor ficar escutando a porta de comunicação escolhida para que possa ouvir qualquer requisição que chegar
app.listen(3000)
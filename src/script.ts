import "reflect-metadata";
import express from "express";

const App = express(); 

App.get( '/', (req, res) => { 
    res.send ({
        name : 'Igor',
        lastName : 'Gulak'
    })
})

App.listen(3000, () => {(
    "Servidor rodando na porta 3000"
    )
})

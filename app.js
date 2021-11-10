import express from 'express'

const app = express()

function resp1(req, res){
    res.send('Olá pessoal 1')
}

app.get('/', resp1)

app.listen(3000, function(){
    console.log("Listening on port http://localhost:3000")
})

// const resp2 = function(req, res){
//     res.send('Olá pessoal 2')
// } 

// const resp3 = (req, res) => {
//     res.send('Olá pessoal 3')
// }


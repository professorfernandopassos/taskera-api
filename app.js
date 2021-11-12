import express from 'express'
import UserController from './src/controller/user.controller.js'

const app = express()

function resp1(req, res){
    res.send('Olá pessoal 1')
}

const userController = new UserController()

function midd(req, res){
    
}

app.get('/', resp1)
app.get('/user', userController.create)

app.listen(3000, function(){
    console.log("Listening on port http://localhost:3000")
})

// const resp2 = function(req, res){
//     res.send('Olá pessoal 2')
// } 

// const resp3 = (req, res) => {
//     res.send('Olá pessoal 3')
// }


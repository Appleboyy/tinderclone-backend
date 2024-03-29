import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import Cors from "cors"

import Test from "./test.js"

//App config
const app = express();
const port = process.env.PORT || 8001

const connection_url = "mongodb+srv://admin:PSZAljTq3t0GxVuY@cluster0.2wdnp.mongodb.net/tinderdb?retryWrites=true&w=majority"

//Middleware
app.use(express.json())
app.use(Cors())

//DB configs
mongoose.connect(connection_url)

//API endpoint
app.get('/', (req, res)=> res.status(200).send("Hello all"));

app.post('/tinder/cards', (req, res)=> {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res)=> {
    Cards.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

// 

app.post('/tinder/tests', (req, res)=> {
    const test = req.body;
    Test.create(test, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/tests', (req, res)=> {
    Test.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})


//Listener
app.listen(port, ()=> console.log("listening on localhost: " + port))
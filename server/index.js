import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import MindsDB from 'mindsdb-js-sdk'
import bodyParser from 'body-parser'
import  cors from 'cors'


import  { router as Btc } from './models/btc.js'
import  { router as Bnb }  from './models/bnb.js'
import  { router as Eth}  from './models/eth.js'
import  { router as Sol}  from './models/sol.js'



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())

const connect = async () => {
  try {
    await MindsDB.default.connect({
      user : 'offorifeanayor@gmail.com',
      password : 'Buzorcholo21'
    }).then(() => console.log('connection successful'))
  } catch(error) {
    // Failed to authenticate.
  }
}
connect();


app.use('/btc', Btc);
app.use('/bnb', Bnb)
app.use('/eth', Eth)
app.use('/sol', Sol)






app.get('/', (req, res) => {


})

//handle undefined routes
app.use((req, res, next) => {
  res.status(404).send({
      message: "Sorry, the requested route does not exist!"
  })
  next()
})

//handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
      message: "An error occured. ",
      error: err.toString()
  })
})




app.listen(4000, (e) => {
  console.log('listening on port 4000')
})

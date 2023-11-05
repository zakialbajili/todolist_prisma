const express =require('express')
const cors = require('cors') 
const routes = require('./routes')


const app = express()
const port =8000
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Welcome API
app.get('/', async (req, res)=>{
    res.status(200).send({
        status:true,
        data: "Welcome to API Todo List"
    })
})
routes(app)
app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
})

module.exports=routes
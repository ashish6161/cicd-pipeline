const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.json({
        status: 200,
        message: "Hello World, this is my first CI-CD Pipeline!"
    })
})

app.listen(8080, ()=>{
    console.log('Server running on port 8080')
})
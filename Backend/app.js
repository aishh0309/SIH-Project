const express = require('express');
const port = 8000; 

const app = express();

app.get('/',(req,res)=>{
    res.send("App is running ")
})


app.listen(port,()=>{
    console.log(`App succesfully running http://localhost:${port}`)
})

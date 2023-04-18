const express=require('express');
const app=express();
const port=5000;
const cors=require('cors')
const category=require('./category/categories.json')

app.get('/',(req,res)=>{
    res.send('dragon news is running')
})
app.use(cors())
app.get('/category',(req,res)=>{
    res.send(category)
})
app.listen(port,()=>{
    console.log(`dragon api running on port ${port}`);
})
const express=require('express');
const mongoose=require('mongoose')
const  bodyParser=require('body-parser')
const app=express()
const port=3000;


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase',{

    useerNewUrlParser : true,
    useUnifiedTopogy:true,
})

.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/items',(req,res)=>{

    const newItem=req.body;

    res.json({message:'item created', item:newitem})
});

app.get('/item',(req,res)=>{

    res.json({message:'list of items'})
})

app.listen(port,()=>{
    console.log(`server running on http:localhost:${port}`)
})
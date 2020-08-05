const express=require('express');

const app=express();

const mongoose=require('mongoose')

app.use(express.urlencoded());
const router=require('./routers/index.js')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/',router)
mongoose.connect('mongodb+srv://ayuhimi:Qm6WMt4W7b0lm36j@cluster0.ahpwd.mongodb.net/shop?retryWrites=true&w=majority')
.then(result=>{
    app.listen(8000);
    console.log('connected to mongodb');
})
.catch(err=>{
    console.log(err);
})


const express=require('express');

const app=express();

app.use(
()=>{
    console.log('test 123');
}    
)

app.listen(4000);
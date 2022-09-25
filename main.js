
const express =require("express");
const app=express();
app.use(express.json());
var Books=[{id :1,name :"ali",desc:"child book",auther:"HANY"},
{id :2,name :"ahmed",desc:"history book",auther:"NOUR"},
{id :3,name :"fatma",desc:"horrer book",auther:"ISLAM"}];
app.get('/',(req,res)=>{

    res.send( Books);
    res.end();
});
app.post('/',(req,res)=>{
    const body=req.body;
    Books.push(body);
    res.send(Books);
    res.end();
});
app.put('/:id',(req,res)=>{

    let id =req.params.id;
    id=parseInt(id);
    const reqID=req.body.id;
    const reqNAME=req.body.name;
    const reqdesc=req.body.desc;
    const reqAuth=req.body.auther;
    Books.forEach((item,index)=>{
        if (id==item.id){
        item.id=reqID?reqID:item.id;
        item.name=reqNAME?reqNAME:item.name;
        item.auther=reqAuth?reqAuth:item.auther;
        item.desc=reqdesc?reqdesc:item.desc;
        res.send(Books);
        }

       
    });
    res.send("not found");
});
app.delete('/:id',(req,res)=>{
    let id =req.params.id;
    id=parseInt(id);
    Books.forEach((value,index)=>{

        if (value.id==id)
        {
            Books.splice(index,1);
            res.send(Books);
            res.end();
        }
        
        
    });
res.send("not found");});
app.listen(3000);
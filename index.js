const app= require('express')();

const  PORT = 4000;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("hello this is succesfull Get Request")
});

app.post('/', (req,res)=>{
    res.send("Alejandra Lizeth Chairez Medina, 20975, 5A")
});postRequest
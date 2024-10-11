import app from "./app.js";
const port = 3000;

app.listen(port, (error) => {
    if(!error){
        console.log("Servidor rodando http://localhost:3000");
    }else{
        throw error;
    }
})
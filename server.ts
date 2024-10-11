import app from "./app";


const port: number = 3000;


app.listen(port, (error?: Error) => {
    if(!error){
        console.log("Servidor rodando http://localhost:3000");
    }else{
        throw error;
    }
})
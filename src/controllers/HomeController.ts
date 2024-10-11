import { Request, Response } from "express";

class HomeController{
    public index(req: Request,res: Response){
        res.json({
            ola: "Olá mundo"
        })
    }
}

export default new HomeController(); // Exportando uma classe ja instanciada
class HomeController{
    async index(req, res){
        res.json("Index");
    }
}

export default new HomeController(); // Exportando uma classe ja instanciada
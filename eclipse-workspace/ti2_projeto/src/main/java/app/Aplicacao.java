package app;

import static spark.Spark.*;
import service.UsuarioService;


public class Aplicacao {
	
	private static UsuarioService usuarioService = new UsuarioService();
	
    public static void main(String[] args) {
        port(6789);

        post("/usuario/insert", (request, response) -> usuarioService.insert(request, response));

        /*get("/usuario/get/id", (request, response) -> usuarioService.get(request, response));
        
        get("/usuario/list", (request, response) -> usuarioService.getAll(request, response));
        
        get("/usuario/update/id", (request, response) -> usuarioService.getToUpdate(request, response));
        
        post("/usuario/update/id", (request, response) -> usuarioService.update(request, response));
           
        delete("/usuario/delete/id", (request, response) -> usuarioService.delete(request, response));
        */

       // post("/produto/insert", (request, response) -> usuarioService.insert(request, response));

             
    }
}
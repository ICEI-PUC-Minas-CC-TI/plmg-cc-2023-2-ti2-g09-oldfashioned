package app;

import static spark.Spark.*;
import service.UsuarioService;
import service.ProdutoService;

public class Aplicacao {
	
	private static UsuarioService usuarioService = new UsuarioService();
	private static ProdutoService produtoService = new ProdutoService();

    public static void main(String[] args) {
        port(6789);

        post("/usuario/insert", (request, response) -> usuarioService.insert(request, response));

        get("/usuario/get/id", (request, response) -> usuarioService.get(request, response));
        
        post("/usuario/update/id", (request, response) -> usuarioService.update(request, response));
           
        delete("/usuario/delete/id", (request, response) -> usuarioService.delete(request, response));
        	
        post("/produto/insert", (request, response) -> produtoService.insert(request, response));
    }
}

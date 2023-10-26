package app;

import static spark.Spark.*;
import service.UsuarioService;
import service.ProdutoService;

public class Aplicacao {
	
	private static UsuarioService usuarioService = new UsuarioService();
	private static ProdutoService produtoService = new ProdutoService();

    public static void main(String[] args) {

        //printando teste na tela
        


        port(6789);

        //post("/usuario/insert", (request, response) -> usuarioService.insert(request, response));

        //get("/usuario/get", (request, response) -> usuarioService.get(request, response));
        
        //post("/usuario/update", (request, response) -> usuarioService.update(request, response));
           
        //delete("/usuario/delete", (request, response) -> usuarioService.delete(request, response));

        get("/usuario/list", (request, response) -> usuarioService.list(request, response));
        	
        //post("/produto/insert", (request, response) -> produtoService.insert(request, response));

        //get("/produto/get", (request, response) -> produtoService.get(request, response));

        //post("/produto/update", (request, response) -> produtoService.update(request, response));

        //delete("/produto/delete", (request, response) -> produtoService.delete(request, response));

        //get("produto/list", (request, response ) -> produtoService . list ( request , response ));
    }
}

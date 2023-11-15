package app;

import static spark.Spark.*;
import service.UsuarioService;
import service.ProdutoService;

import java.util.HashMap;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Spark;
public class Aplicacao {
	
	private static UsuarioService usuarioService = new UsuarioService();
	private static ProdutoService produtoService = new ProdutoService();

    public static void main(String[] args) {

        port(6789);

        staticFiles.location("/public");

        CorsFilter.apply();

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        post("/usuario/insert", (request, response) -> usuarioService.insert(request, response));

        get("/usuario/get", (request, response) -> usuarioService.get(request, response));
        
        get("/usuario/get/username/:id", (request, response) -> usuarioService.getUsuarioByUsername(request, response));

        get("/usuario/get/produtosCurtidos/:id", (request, response) -> usuarioService.getProdutosCurtidos(request, response));

        post("/usuario/update", (request, response) -> usuarioService.update(request, response));
           
        delete("/usuario/delete", (request, response) -> usuarioService.delete(request, response));

        get("/usuario/list", (request, response) -> usuarioService.list(request, response));
        
        post("/produto/insert", (request, response) -> produtoService.insert(request, response));

        get("/produto/get", (request, response) -> produtoService.get(request, response));

        post("/produto/update", (request, response) -> produtoService.update(request, response));

        delete("/produto/delete", (request, response) -> produtoService.delete(request, response));

        get("/produto/list", (request, response ) -> produtoService . list ( request , response ));

    }
}

class CorsFilter {
    
    private static final HashMap<String, String> corsHeaders = new HashMap<String, String>();
    
    static {
        corsHeaders.put("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        corsHeaders.put("Access-Control-Allow-Origin", "*");
        corsHeaders.put("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,");
        corsHeaders.put("Access-Control-Allow-Credentials", "true");
    }

    public final static void apply() {
        Filter filter = new Filter() {
            @Override
            public void handle(Request request, Response response) throws Exception {
                corsHeaders.forEach((key, value) -> {
                    response.header(key, value);
                });
            }
        };
        Spark.after(filter);
    }
}
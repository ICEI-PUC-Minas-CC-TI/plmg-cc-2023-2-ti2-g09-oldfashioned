package service;

import java.util.Scanner;
import java.io.File;
import java.util.List;
import dao.ProdutoDAO;
import model.Produto;
import spark.Request;
import spark.Response;
import com.google.gson.Gson;

public class ProdutoService {

    public ProdutoDAO produtoDAO = new ProdutoDAO();

    public ProdutoService(){

    }

    public String insert(Request request, Response response){
        String str = request.body();

        Gson gson = new Gson();
        Produto produto = gson.fromJson(str, Produto.class);
        
        if(produtoDAO.insert(produto) == true){
            return "Produto inserido com sucesso!";
        }
        else{
            return "Erro ao inserir produto!";
        }
    }
    
}

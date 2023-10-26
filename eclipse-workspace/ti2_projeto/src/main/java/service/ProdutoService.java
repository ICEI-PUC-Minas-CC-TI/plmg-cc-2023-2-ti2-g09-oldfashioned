package service;

import java.util.Scanner;
import java.io.File;
import java.util.List;
import dao.ProdutoDAO;
import model.Produto;
import model.Usuario;
import spark.Request;
import spark.Response;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

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
    
    public String delete(Request request, Response response){
		String str = request.body();

        JsonObject jsonObject = JsonParser.parseString(str).getAsJsonObject();

        int produto_id = Integer.parseInt(jsonObject.get("produto_id").getAsString());
		
		if(produtoDAO.delete(produto_id) == true){
			return "Produto deletado com sucesso!";
		}
		else{
			return "Erro ao deletar produto!";
		}
	}

    public String update(Request request, Response response){
		String str = request.body();

		Gson gson = new Gson();
		Produto produto = gson.fromJson(str, Produto.class);
		
		if(produtoDAO.update(produto) == true){
			return "Produto atualizado com sucesso!";
		}
		else{
			return "Erro ao atualizar produto!";
		}
	}

    public String get(Request request, Response response){
		String str = request.body();

        JsonObject jsonObject = JsonParser.parseString(str).getAsJsonObject();

        int produto_id = Integer.parseInt(jsonObject.get("produto_id").getAsString());
		
		Produto produtoBuscado = produtoDAO.get(produto_id);

		if(produtoBuscado != null){
			return "Produto encontrado: " + produtoBuscado.getNome();
		}
		else{
			return "Produto não encontrado!";
		}
	}
}
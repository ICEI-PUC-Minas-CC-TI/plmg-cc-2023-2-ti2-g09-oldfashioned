package service;

import dao.ProdutoDAO;
import model.Produto;
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
	
	//metodo get que retorna um json
    public String get(Request request, Response response){
		String str = request.body();

		Gson gson = new Gson();
		Produto produto = gson.fromJson(str, Produto.class);

		if(produto.getProdutoId() == 0){
			return "Erro ao buscar Produto!";
		}
		else{
			produto = produtoDAO.get(produto.getProdutoId());
			return gson.toJson(produto);
		}
	}

	public String list(Request request, Response response) {
		ProdutoDAO produtoDAO = new ProdutoDAO(); // Crie uma instância da classe ProdutoDAO se necessário
		Produto[] produtos = produtoDAO.list();
	
		Gson gson = new Gson();
		String json = gson.toJson(produtos);
	
		return json;
	}
	
}
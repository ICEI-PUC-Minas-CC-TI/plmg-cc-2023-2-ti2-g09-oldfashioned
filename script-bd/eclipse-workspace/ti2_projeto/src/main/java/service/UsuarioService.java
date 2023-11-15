package service;

import dao.UsuarioDAO;
import model.Usuario;
import spark.Request;
import spark.Response;
import com.google.gson.Gson;



public class UsuarioService {

	public UsuarioDAO usuarioDAO = new UsuarioDAO();

	public UsuarioService(){

	}

	public String insert(Request request, Response response){
		String str = request.body();

		Gson gson = new Gson();
		Usuario usuario = gson.fromJson(str, Usuario.class);
		
		if(usuarioDAO.insert(usuario) == true){
			return "Usuário inserido com sucesso!";
		}
		else{
			return "Erro ao inserir usuário!";
		}

	}

	public String delete(Request request, Response response){
		String str = request.body();

		Gson gson = new Gson();
		Usuario usuario = gson.fromJson(str, Usuario.class);
		
		if(usuarioDAO.delete(usuario.getId()) == true){
			return "Usuário deletado com sucesso!";
		}
		else{
			return "Erro ao deletar usuário!";
		}
	}

	public String update(Request request, Response response){
		String str = request.body();

		Gson gson = new Gson();
		Usuario usuario = gson.fromJson(str, Usuario.class);
		
		if(usuarioDAO.update(usuario) == true){
			return "Usuário atualizado com sucesso!";
		}
		else{
			return "Erro ao atualizar usuário!";
		}
	}

	//metodo get que retorna um json com o usuario
	public String get(Request request, Response response){
		String str = request.body();
		System.out.println(str);
		Gson gson = new Gson();
		Usuario usuario = gson.fromJson(str, Usuario.class);

		if(usuario.getId() == 0){
			return "Erro ao buscar usuário!";
		}
		else{
			usuario = usuarioDAO.get(usuario.getId());
			return gson.toJson(usuario);
		}
	}

	public String getUsuarioByUsername(Request request, Response response){
		String id = request.params(":id");
		
		Usuario usuario = usuarioDAO.getUsuarioByUsername(Integer.parseInt(id));

		if(usuario == null){
			response.status(404); // 404 Not found
			return "{\"message\": \"Usuario não encontrada\"}";
		}else{
			response.header("Content-Type", "application/json");
			response.header("Content-Encoding", "UTF-8");

			return new Gson().toJson(usuario);
		}
		
	}

	public String getProdutosCurtidos(Request request, Response response){
		String id = request.params(":id");

		String produtosCurtidos = usuarioDAO.getProdutosCurtidos(Integer.parseInt(id));

		if(produtosCurtidos == null){
			response.status(404); // 404 Not found
			return "{\"message\": \"Usuario não encontrada\"}";
		}else{
			response.header("Content-Type", "application/json");
			response.header("Content-Encoding", "UTF-8");

			return produtosCurtidos;
		}
	}

	public String list(Request request, Response response){
		UsuarioDAO usuarioDAO = new UsuarioDAO();

		Usuario[] usuarios = usuarioDAO.list();

		Gson gson = new Gson();
		String json = gson.toJson(usuarios);

		return json;
	}
} 
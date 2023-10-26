package service;

import java.util.Scanner;
import java.io.File;
import java.util.List;
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

	public String list(Request request, Response response){
		UsuarioDAO usuarioDAO = new UsuarioDAO();

		Usuario[] usuarios = usuarioDAO.list();

		Gson gson = new Gson();
		String json = gson.toJson(usuarios);

		return json;
	}
} 
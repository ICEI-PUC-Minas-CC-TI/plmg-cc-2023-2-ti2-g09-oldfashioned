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

			System.out.println("Conexão efetuada com o service!");

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
}

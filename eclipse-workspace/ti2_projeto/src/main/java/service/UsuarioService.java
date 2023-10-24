package service;

import java.util.Scanner;
import java.io.File;
import java.util.List;
import dao.UsuarioDAO;
import model.Usuario;
import spark.Request;
import spark.Response;



public class UsuarioService {

	private UsuarioDAO usuarioDAO = new UsuarioDAO();
	private String form;
	private final int FORM_INSERT = 1;
	private final int FORM_DETAIL = 2;
	private final int FORM_UPDATE = 3;
	
	public UsuarioService() {
		makeForm();
	}

	
	public void makeForm() {
		makeForm(FORM_INSERT, new Usuario());
	}
	
	public void makeForm(int tipo, Usuario usuario) {
		// Inicialize a variável 'form'
		System.out.println("Conexão efetuada com o service!");

		String form = "";
		
		String umUsuario = "";
		
		if (tipo != FORM_INSERT) {
			umUsuario += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;<a href=\"/usuario/list/1\">Novo Usuario</a></b></font></td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t</table>";
			umUsuario += "\t<br>";
		}
	
		if (tipo == FORM_INSERT || tipo == FORM_UPDATE) {
			String action = "/usuario/";
			String name, nome, username, email, genero, foto, senha, buttonLabel;
			int idade;
	
			if (tipo == FORM_INSERT) {
				action += "insert";
				name = "Inserir Usuario";
				nome = "Lucas Alkmim...";
				username = "lucasalkmim";
				email = "exemplo@gmail.com"; 
				idade = 20;
				genero = "Masculino";
				foto = "https://i.pinimg.com/550x/f1/39/dc/f139dc89e5b1ad0818f612c7f33200a5.jpg";
				senha = "123456";
				buttonLabel = "Inserir";
			} else {
				action += "update/" + usuario.getId();
				name = "Atualizar Usuario (ID " + usuario.getId() + ")";
				nome = usuario.getNome();
				username = usuario.getUsername();
				email = usuario.getEmail();
				idade = usuario.getIdade();
				genero = usuario.getGenero();
				foto = usuario.getFoto();
				senha = usuario.getSenha();
				buttonLabel = "Atualizar";
			}
			umUsuario += "\t<form class=\"form--register\" action=\"" + action + "\" method=\"post\" id=\"form-add\">";
			umUsuario += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td colspan=\"3\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;" + name + "</b></font></td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td colspan=\"3\" align=\"left\">&nbsp;</td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Nome: <input class=\"input--register\" type=\"text\" name=\"descricao\" value=\"" + nome + "\"></td>";
			umUsuario += "\t\t\t<td>Username: <input class=\"input--register\" type=\"text\" name=\"preco\" value=\"" + username + "\"></td>";
			umUsuario += "\t\t\t<td>Email: <input class=\"input--register\" type=\"text\" name=\"email\" value=\"" + email + "\"></td>"; // Correção: atributo 'name' deve ser "email"
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Idade: <input class=\"input--register\" type=\"text\" name=\"idade\" value=\"" + idade + "\"></td>"; // Correção: atributo 'name' deve ser "idade"
			umUsuario += "\t\t\t<td>Genero: <input class=\"input--register\" type=\"text\" name=\"genero\" value=\"" + genero + "\"></td>"; // Correção: atributo 'name' deve ser "genero"
			umUsuario += "\t\t\t<td>Foto: <input class=\"input--register\" type=\"text\" name=\"foto\" value=\"" + foto + "\"></td>"; // Correção: atributo 'name' deve ser "foto"
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Senha: <input class=\"input--register\" type=\"text\" name=\"senha\" value=\"" + senha + "\"></td>"; // Correção: atributo 'name' deve ser "senha"
			umUsuario += "\t\t\t<td>&nbsp;</td>";
			umUsuario += "\t\t\t<td align=\"center\"><input type=\"submit\" value=\"" + buttonLabel + "\" class=\"input--main__style input--button\"></td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t</table>";
			umUsuario += "\t</form>";
		} else if (tipo == FORM_DETAIL) {
			umUsuario += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td colspan=\"3\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;Detalhar Usuario (ID " + usuario.getId() + ")</b></font></td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td colspan=\"3\" align=\"left\">&nbsp;</td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Nome: " + usuario.getNome() + "</td>";
			umUsuario += "\t\t\t<td>Username: " + usuario.getUsername() + "</td>";
			umUsuario += "\t\t\t<td>Email: " + usuario.getEmail() + "</td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Idade: " + usuario.getIdade() + "</td>";
			umUsuario += "\t\t\t<td>Genero: " + usuario.getGenero() + "</td>";
			umUsuario += "\t\t\t<td>Foto: " + usuario.getFoto() + "</td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t\t<tr>";
			umUsuario += "\t\t\t<td>&nbsp;Senha: " + usuario.getSenha() + "</td>";
			umUsuario += "\t\t\t<td>&nbsp;</td>";
			umUsuario += "\t\t</tr>";
			umUsuario += "\t</table>";
		} else {
			System.out.println("ERRO! Tipo não identificado " + tipo);
		}
	
		// Substitua os marcadores no HTML pelo conteúdo gerado
		String nomeArquivo = "form.html";
		try {
			Scanner entrada = new Scanner(new File(nomeArquivo));
			while (entrada.hasNext()) {
				form += (entrada.nextLine() + "\n");
			}
			entrada.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	
		form = form.replaceFirst("<UM-USUARIO>", umUsuario);
	
		String list = "<table width=\"80%\" align=\"center\" bgcolor=\"#f3f3f3\">";
		list += "\n<tr><td colspan=\"6\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;Relação de usuarios</b></font></td></tr>\n" +
				"\n<tr><td colspan=\"6\">&nbsp;</td></tr>\n" +
				"\n<tr>\n" +
				"\t<td><b>ID</b></td>\n" +
				"\t<td><b>Nome</b></td>\n" +
				"\t<td><b>Email</b></td>\n" +
				"\t<td><b>Idade</b></td>\n" +
				"\t<td><b>Genero</b></td>\n" +
				"\t<td><b>Foto</b></td>\n" +
				"\t<td><b>Senha</b></td>\n" +
				"\t<td width=\"100\" align=\"center\"><b>Detalhar</b></td>\n" +
				"\t<td width=\"100\" align=\"center\"><b>Atualizar</b></td>\n" +
				"\t<td width=\"100\" align=\"center\"><b>Excluir</b></td>\n" +
				"</tr>";
		
		List<Usuario> usuarios = usuarioDAO.getAll();
		int i = 0;
		String bgcolor = "";
		for (Usuario u : usuarios) {
			bgcolor = (i++ % 2 == 0) ? "#fff5dd" : "#dddddd";
			list += "\n<tr bgcolor=\"" + bgcolor + "\">\n" +
					"\t<td>" + u.getId() + "</td>\n" +
					"\t<td>" + u.getNome() + "</td>\n" +
					"\t<td>" + u.getEmail() + "</td>\n" +
					"\t<td>" + u.getIdade() + "</td>\n" +
					"\t<td>" + u.getGenero() + "</td>\n" +
					"\t<td>" + u.getFoto() + "</td>\n" +
					"\t<td>" + u.getSenha() + "</td>\n" +
					"\t<td align=\"center\" valign=\"middle\"><a href=\"/usuario/" + u.getId() + "\"><img src=\"/image/detail.png\" width=\"20" +
					"\" height=\"20\"/></a></td>\n" +
					"\t<td align=\"center\" valign=\"middle\"><a href=\"/usuario/update/" + u.getId() + "\"><img src=\"/image/update.png\" width=\"20" +
					"\" height=\"20\"/></a></td>\n" +
					"\t<td align=\"center\" valign=\"middle\"><a href=\"javascript:confirmarDeleteUsuario('" + u.getId() + "', '" + u.getNome() + "', '" +
					u.getUsername() + "', '" + u.getEmail() + "', '" + u.getIdade() + "', '" + u.getGenero() + "', '" + u.getFoto() + "', '" + u.getSenha() + "');\">" +
					"<img src=\"/image/delete.png\" width=\"20\" height=\"20\"/></a></td>\n" +
					"</tr>\n";
		
		}
		list += "</table>";
		

			form = form.replaceFirst("<LISTAR-USUARIO>", list);
	}
	
	
	
	public Object insert(Request request, Response response) {
		int id = Integer.parseInt(request.queryParams("id"));
		String usuario = request.queryParams("usuario");
		String nome = request.queryParams("nome");
		String email = request.queryParams("email");
		int idade = Integer.parseInt(request.queryParams("idade"));
		String genero = request.queryParams("genero");
		String foto = request.queryParams("foto");
		String senha = request.queryParams("senha");
		
		String resp = "";
		
		Usuario user = new Usuario(id, usuario, nome, email, idade, genero, foto, senha);
		
		if(usuarioDAO.insert(user) == true) {
            resp = "Usuario (" + usuario + ") inserido!";
            response.status(201); // 201 Created
		} else {
			resp = "Usuario (" + usuario + ") não inserido!";
			response.status(404); // 404 Not found
		}
			
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}

	public Object get(Request request, Response response) {
		int id = Integer.parseInt(request.params(":id"));
		Usuario user = (Usuario) usuarioDAO.get(id);
		
		if (user != null) {
			response.status(200); // success
			makeForm(FORM_DETAIL, user);
        } else {
            response.status(404); // 404 Not found
            String resp = "Usuario [" + id + "] não encontrado.";
    		makeForm();
    		form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");     
        }

		return form;
	}

	
	public Object getToUpdate(Request request, Response response) {
		int id = Integer.parseInt(request.params(":id"));		
		Usuario user = (Usuario) usuarioDAO.get(id);
		
		if (user != null) {
			response.status(200); // success
			makeForm(FORM_UPDATE, user);
        } else {
            response.status(404); // 404 Not found
            String resp = "Usuario [" + id + "] não encontrado.";
    		makeForm();
    		form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");     
        }

		return form;
	}
	
	
	public Object getAll(Request request, Response response) {
		makeForm();
	    response.header("Content-Type", "text/html");
	    response.header("Content-Encoding", "UTF-8");
		return form;
	}			
	
	public Object update(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
		Usuario user = usuarioDAO.get(id);
        String resp = "";       

        if (user != null) {
			user.setId(Integer.parseInt(request.queryParams("id")));
			user.setUsername(request.queryParams("username"));
			user.setNome(request.queryParams("nome"));
			user.setEmail(request.queryParams("email"));
			user.setIdade(Integer.parseInt(request.queryParams("idade")));
			user.setGenero(request.queryParams("genero"));
			user.setFoto(request.queryParams("foto"));
			user.setSenha(request.queryParams("senha"));
        	usuarioDAO.update(user);
        	response.status(200); // success
            resp = "Usuario (ID " + user.getId() + ") atualizado!";
        } else {
            response.status(404); // 404 Not found
            resp = "Usuario não encontrado!";
        }
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}

	
	public Object delete(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
        Usuario user = usuarioDAO.get(id);
        String resp = "";       

        if (user != null) {
            usuarioDAO.delete(id);
            response.status(200); // success
            resp = "Usuario (" + id + ") excluído!";
        } else {
            response.status(404); // 404 Not found
            resp = "Usuario (" + id + ") não encontrado!";
        }
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}
} 
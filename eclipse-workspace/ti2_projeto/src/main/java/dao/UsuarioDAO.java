package dao;

import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Usuario;

public class UsuarioDAO extends DAO{
	public UsuarioDAO() {
		super();
		conectar();
	}
	public void finalize() {
		close();
	}
	
	public boolean insert(Usuario usuario){ //O método recebe um objeto Usuario com os dados que serão inseridos no banco de dados
		//Status da conexão:
		boolean status = false;
		try {
		Statement st = conexao.createStatement();

		String sql = "INSERT INTO usuario (id, username, nome, email, idade, genero, foto, senha) "
		+ "VALUES ("+usuario.getId()+ ", '" +usuario.getUsername()+ "', '" + usuario.getNome() + "', '" + usuario.getEmail() + "', '" + usuario.getIdade() 
		+ "', '" + usuario.getGenero() + "', '" + usuario.getFoto() + "', '" + usuario.getSenha() + "');";

		System.out.println(sql);

		st.executeUpdate(sql);

		st.close();
		status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}


	public List<Usuario> getAll() { //O método getAll() retorna uma lista com todos os registros da tabela usuario

		List<Usuario> usuarios = new ArrayList<>();
		try {
		Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);

		String sql = "SELECT * FROM usuario";
		System.out.println(sql);

		ResultSet rs = st.executeQuery(sql);
		while (rs.next()) // enquanto houver registros no ResultSet
		{
		//Cria um objeto Usuario para cada registro da tabela
		Usuario usuario = new Usuario(rs.getInt("id"), rs.getString("username"), rs.getString("nome"), rs.getString("email"), rs.getInt("idade"), rs.getString("genero"), rs.getString("foto"), rs.getString("senha"));

		usuarios.add(usuario);
		}

		st.close();
		} catch (Exception e) {

			System.out.println(e.getMessage());
		}

		return usuarios;
	}

	public boolean delete(int id) { //O método recebe o ID do usuário que será excluído
		boolean status = false;
		try {
			Statement st = conexao.createStatement();
			String sql = "DELETE FROM usuario WHERE id = " + id + ";";
			System.out.println(sql);
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}

	public boolean update(Usuario user) { //O método recebe um objeto Usuario com os dados que serão atualizados no banco de dados
		boolean status = false;
		try {
			Statement st = conexao.createStatement();
			String sql = "UPDATE usuario SET id = '" + user.getId() + "', username = '" + user.getUsername() + "', nome = '"
			+ user.getNome() + "', email = '" + user.getEmail() + "', idade = '" + user.getIdade() + "', genero = '" + user.getGenero() + "', foto = '" 
			+ user.getFoto() + "', senha = '" + user.getSenha() + "'" + " WHERE id = " + user.getId();
			System.out.println(sql);
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}

	public Usuario get(int id) {
		Usuario user = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			String sql = "SELECT * FROM usuario WHERE id = " + id;
			ResultSet rs = st.executeQuery(sql);
			if (rs.next()) {
				user = new Usuario(rs.getInt("id"), rs.getString("username"), rs.getString("nome"), rs.getString("email"), rs.getInt("idade"), rs.getString("genero"), rs.getString("foto"), rs.getString("senha"));
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return user;
	}

	
}

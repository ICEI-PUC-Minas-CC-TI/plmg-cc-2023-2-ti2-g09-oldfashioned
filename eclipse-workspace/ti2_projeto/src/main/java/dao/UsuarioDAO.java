package dao;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


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

			String sql = "INSERT INTO usuario ( username, nome, email, idade, genero, foto, senha) "
			+ "VALUES ('" + usuario.getUsername() + "', '"
			+ usuario.getNome() + "', '" + usuario.getEmail() + "', " + usuario.getIdade() + " , '" + usuario.getGenero() + "', '" + usuario.getFoto() + "', '" + usuario.getSenha() + "');";
			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}


	
}

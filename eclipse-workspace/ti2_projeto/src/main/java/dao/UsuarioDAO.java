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

	public boolean delete(int id){
		boolean status = false;
		try {
			Statement st = conexao.createStatement();
			st.executeUpdate("DELETE FROM usuario WHERE id = " + id);
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}

	public boolean update(Usuario usuario){
		boolean status = false;
		try {
			String sql = "UPDATE usuario SET username = '" + usuario.getUsername() + "', nome = '"  
			+ usuario.getNome() + "', email = '" + usuario.getEmail() + "', idade = " + usuario.getIdade() + ", genero = '" + usuario.getGenero() + "', foto = '" + usuario.getFoto() + "', senha = '" + usuario.getSenha() + "'"
			+ " WHERE id = " + usuario.getId();
			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}

	public Usuario get(int id){
		Usuario usuario = null;
		try {
			Statement st = conexao.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM usuario WHERE id = " + id);
			if(rs.next()){
				usuario = new Usuario(
					rs.getInt("id"),
					rs.getString("username"),
					rs.getString("nome"),
					rs.getString("email"),
					rs.getInt("idade"),
					rs.getString("genero"),
					rs.getString("foto"),
					rs.getString("senha")
				);
			}
			st.close();
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return usuario;
	}

	public Usuario[] list(){
		Usuario[] usuarios = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM usuario");		
			if(rs.next()){
				rs.last();
				usuarios = new Usuario[rs.getRow()];
				rs.beforeFirst();

				for(int i = 0; rs.next(); i++) {
					usuarios[i] = new Usuario(
						rs.getInt("id"),
						rs.getString("username"),
						rs.getString("nome"),
						rs.getString("email"),
						rs.getInt("idade"),
						rs.getString("genero"),
						rs.getString("foto"),
						rs.getString("senha")
					);
				}
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return usuarios;
	}
}

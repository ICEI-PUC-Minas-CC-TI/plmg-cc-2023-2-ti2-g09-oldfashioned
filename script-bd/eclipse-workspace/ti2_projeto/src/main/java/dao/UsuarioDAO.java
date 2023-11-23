package dao;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



import model.Usuario;

public class UsuarioDAO extends DAO{
	public UsuarioDAO() {
		super();
		conectar();
	}
	public void finalize() {
		close();
	}
	
	public boolean insert(Usuario usuario) {
        boolean status = false;
        try {
            // Cria uma instância do MessageDigest com o algoritmo MD5
            MessageDigest md = MessageDigest.getInstance("MD5");
            // Converte a senha para um array de bytes e a alimenta para o MessageDigest
            md.update(usuario.getSenha().getBytes());
            // Gera o hash MD5
            byte[] hashBytes = md.digest();

            // Converte os bytes do hash para uma representação hexadecimal
            StringBuilder hexStringBuilder = new StringBuilder();
            for (byte b : hashBytes) {
                hexStringBuilder.append(String.format("%02x", b));
            }

            // Substitui a senha original pela versão criptografada
            usuario.setSenha(hexStringBuilder.toString());

            // Continua com a inserção no banco de dados
            String sql = "INSERT INTO usuario (username, nome, email, idade, genero, foto, senha, produtos_curtidos) "
                    + "VALUES ('" + usuario.getUsername() + "', '" + usuario.getNome() + "', '" + usuario.getEmail()
                    + "', " + usuario.getIdade() + " , '" + usuario.getGenero() + "', '" + usuario.getFoto() + "', '"
                    + usuario.getSenha() + "', '" + usuario.getProdutosCurtidos() + "');";
            PreparedStatement st = conexao.prepareStatement(sql);
            st.executeUpdate();
            st.close();
            status = true;
        } catch (SQLException | NoSuchAlgorithmException u) {
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
			+ usuario.getNome() + "', email = '" + usuario.getEmail() + "', idade = " + usuario.getIdade() + ", genero = '" + usuario.getGenero() + "', foto = '" + usuario.getFoto() + "', senha = '" + usuario.getSenha() + "', produtos_curtidos = '" + usuario.getProdutosCurtidos() + "'"
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
					rs.getString("senha"),
					rs.getString("produtos_curtidos")
				);
			}
			st.close();
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return usuario;
	}

	public Usuario getUsuarioByUsername(int id){
		Usuario usuario = null;
		try {
			Statement st = conexao.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM usuario WHERE id = '" + id + "'");
			if(rs.next()){
				usuario = new Usuario(
					rs.getInt("id"),
					rs.getString("username"),
					rs.getString("nome"),
					rs.getString("email"),
					rs.getInt("idade"),
					rs.getString("genero"),
					rs.getString("foto"),
					rs.getString("senha"),
					rs.getString("produtos_curtidos")
				);
			}
			st.close();
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return usuario;
	}

	public String getProdutosCurtidos(int id){
		String produtosCurtidos = null;
		try {
			Statement st = conexao.createStatement();
			ResultSet rs = st.executeQuery("SELECT produtos_curtidos FROM usuario WHERE id = '" + id + "'");
			if(rs.next()){
				produtosCurtidos = rs.getString("produtos_curtidos");
			}
			st.close();
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return produtosCurtidos;
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
						rs.getString("senha"),
						rs.getString("produtos_curtidos")
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
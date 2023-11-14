package dao;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Produto;

public class ProdutoDAO extends DAO{
    public ProdutoDAO() {
        super();
        conectar();
    }
    public void finalize() {
        close();
    }
    
    public boolean insert(Produto produto){ //O método recebe um objeto Usuario com os dados que serão inseridos no banco de dados
        //Status da conexão:
        boolean status = false;
        try {

            String sql = "INSERT INTO produto ( nome, descricao, imagem, preco, quantidade, link_site, link_medidas, cor, tamanho, evento) "
            + "VALUES ('" + produto.getNome() + "', '" + produto.getDescricao() + "', '" + produto.getImagem() + "', " + produto.getPreco() + " , " + produto.getQuantidade() + ", '" + produto.getLinkSite() + "', '" + produto.getLinkMedidas() + "', '" + produto.getCor() + "', '" + produto.getTamanho() + "', '" + produto.getEvento() + "');";
            PreparedStatement st = conexao.prepareStatement(sql);
            st.executeUpdate();
            st.close();
            status = true;
        } catch (SQLException u) {
            throw new RuntimeException(u);
        }
        return status;
    }

    public boolean delete(int produto_id){
		boolean status = false;
		try {
			Statement st = conexao.createStatement();
			st.executeUpdate("DELETE FROM produto WHERE produto_id = " + produto_id);
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}
    
    public boolean update(Produto produto){
		boolean status = false;
		try {

			String sql = "UPDATE produto SET nome = '"  
			+ produto.getNome() + "', descricao = '" + produto.getDescricao() + "', imagem = '" + produto.getImagem() + "', preco = " 
            + produto.getPreco() + ", quantidade = " + produto.getQuantidade() + ", link_site = '" + produto.getLinkSite() 
            + "', link_medidas = '" + produto.getLinkMedidas() + "', cor = '" + produto.getCor() + "', tamanho = '" + produto.getTamanho() 
            + "', evento = '" + produto.getEvento() + "'"
			+ " WHERE produto_id = " + produto.getProdutoId();

			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return status;
	}

    public Produto get(int id){
		Produto produto = null;
		try {
			Statement st = conexao.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM produto WHERE produto_id = " + id);
			if(rs.next()){
				produto = new Produto(
					rs.getInt("produto_id"),
					rs.getString("nome"),
					rs.getString("descricao"),
					rs.getString("imagem"),
					rs.getDouble("preco"),
					rs.getInt("quantidade"),
					rs.getString("link_site"),
					rs.getString("link_medidas"),
					rs.getString("cor"),
					rs.getString("tamanho"),
					rs.getString("evento")
				);
			}
			st.close();
		} catch (SQLException u) {
			throw new RuntimeException(u);
		}
		return produto;
	}

	public Produto[] list(){
		Produto[] produtos = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM produto");		
	         if(rs.next()){
	             rs.last();
	             produtos = new Produto[rs.getRow()];
	             rs.beforeFirst();

	             for(int i = 0; rs.next(); i++) {
	                produtos[i] = new Produto(
						rs.getInt("produto_id"),
						rs.getString("nome"),
						rs.getString("descricao"),
						rs.getString("imagem"),
						rs.getDouble("preco"),
						rs.getInt("quantidade"),
						rs.getString("link_site"),
						rs.getString("link_medidas"),
						rs.getString("cor"),
						rs.getString("tamanho"),
						rs.getString("evento")
					);
	             }
	          }
	          st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return produtos;
	}
}
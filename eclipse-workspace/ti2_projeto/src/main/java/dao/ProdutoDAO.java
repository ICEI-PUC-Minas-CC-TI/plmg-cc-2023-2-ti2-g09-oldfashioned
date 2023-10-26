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

            String sql = "INSERT INTO produto ( userId, nome, descricao, imagem, preco, quantidade, linkSite, linkMedidas, cor, tamanho, evento) "
            + "VALUES (" + produto.getUserId() + ", '"
            + produto.getNome() + "', '" + produto.getDescricao() + "', '" + produto.getImagem() + "', " + produto.getPreco() + " , " + produto.getQuantidade() + ", '" + produto.getLinkSite() + "', '" + produto.getLinkMedidas() + "', '" + produto.getCor() + "', '" + produto.getTamanho() + "', '" + produto.getEvento() + "');";
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
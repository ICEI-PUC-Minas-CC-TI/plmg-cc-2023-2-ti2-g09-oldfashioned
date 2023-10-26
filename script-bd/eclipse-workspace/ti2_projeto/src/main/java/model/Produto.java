package model;

public class Produto {
    private int produtoId;
    private String nome;
    private String descricao;
    private String imagem;
    private double preco;
    private int quantidade;
    private String linkSite;
    private String linkMedidas;
    private String cor;
    private String tamanho;
    private String evento;

    //Construtores
    public Produto(){
        nome = descricao = imagem = linkSite = linkMedidas = cor = tamanho = evento = "";
        produtoId = quantidade = 0;
        preco = 0.0;
    }

    public Produto(int produtoId, String nome, String descricao, String imagem, double preco, int quantidade, String linkSite, String linkMedidas, String cor, String tamanho, String evento){
        this.produtoId = produtoId;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.preco = preco;
        this.quantidade = quantidade;
        this.linkSite = linkSite;
        this.linkMedidas = linkMedidas;
        this.cor = cor;
        this.tamanho = tamanho;
        this.evento = evento;
    }

    //Setters e Getters

    public void setProdutoId(int produtoId){
        this.produtoId = produtoId;
    }

    public int getProdutoId(){
        return produtoId;
    }   

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    public void setDescricao(String descricao){
        this.descricao = descricao;
    }

    public String getDescricao(){
        return descricao;
    }

    public void setImagem(String imagem){
        this.imagem = imagem;
    }

    public String getImagem(){
        return imagem;
    }

    public void setPreco(double preco){
        this.preco = preco;
    }

    public double getPreco(){
        return preco;
    }

    public void setQuantidade(int quantidade){
        this.quantidade = quantidade;
    }

    public int getQuantidade(){
        return quantidade;
    }

    public void setLinkSite(String linkSite){
        this.linkSite = linkSite;
    }

    public String getLinkSite(){
        return linkSite;
    }

    public void setLinkMedidas(String linkMedidas){
        this.linkMedidas = linkMedidas;
    }

    public String getLinkMedidas(){
        return linkMedidas;
    }

    public void setCor(String cor){
        this.cor = cor;
    }

    public String getCor(){
        return cor;
    }

    public void setTamanho(String tamanho){
        this.tamanho = tamanho;
    }

    public String getTamanho(){
        return tamanho;
    }

    public void setEvento(String evento){
        this.evento = evento;
    }

    public String getEvento(){
        return evento;
    }

    @Override
    public String toString(){
        return produtoId + ":" + nome + ":" + descricao + ":" + imagem + ":" + preco + ":" + quantidade + ":" + linkSite + ":" + linkMedidas + ":" + cor + ":" + tamanho + ":" + evento;
    }
}

package model;

public class Usuario {
    private int id;
	private String username;
	private String nome;
	private String email;
	private int idade;
	private String genero;
	private	String foto; //Link para a foto
	private String senha;
    private String produtosCurtidos;

    //Construtores
	public Usuario(){
        username = nome = email = genero = foto = senha = produtosCurtidos = "";
        id = idade = 0;
    }
    public Usuario(int id, String username, String nome, String email, int idade, String genero, String foto, String senha, String produtosCurtidos){
        this.id = id;
        this.username = username;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.genero = genero;
        this.foto = foto;
        this.senha = senha;
        this.produtosCurtidos = produtosCurtidos;
    }
    
    //Setters e Getters
    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return id;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getUsername(){
        return username;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public String getNome(){
        return nome;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getEmail(){
        return email;
    }
    public void setIdade(int idade){
        this.idade = idade;
    }
    public int getIdade(){
        return idade;
    }
    public void setGenero(String genero){
        this.genero = genero;
    }
    public String getGenero(){
        return genero;
    }
    public void setFoto(String foto){
        this.foto = foto;
    }
    public String getFoto(){
        return foto;
    }
    public void setSenha(String senha){
        this.senha = senha;
    }
    public String getSenha(){

        return senha;
    }

    public void setProdutosCurtidos(String produtosCurtidos){
        this.produtosCurtidos = produtosCurtidos;
    }

    public String getProdutosCurtidos(){
        return produtosCurtidos;
    }
    @Override
    public String toString(){
        String resp = id + ":" + username + ":" + nome + ":" + email + ":" + idade + ":" + genero + ":" + foto + ":" + senha + ":" + produtosCurtidos;
        return resp;
    }
}
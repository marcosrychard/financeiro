package com.financeiro.financeiro.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "entidade")
public class Entidade {

    @Id
    private String codigo;
    @NotBlank(message = "Nome obrigatorio")
    private String nome;
    @NotBlank(message = "Cpf/Cnpj obrigatorio")
    private String cpfOuCnpj;
    @NotBlank(message = "Endereço obrigatorio")
    private String endereco;
    @NotBlank(message = "Cidade obrigatorio")
    private String cidade;
    @NotBlank(message = "Bairrp obrigatorio")
    private String bairro;
    @NotBlank(message = "Estado obrigatorio")
    private String estado;
    @NotBlank(message = "Telefone obrigatorio")
    private String telefone;
    private String celular;
    @Email
    @NotBlank(message = "Email obrigatorio")
    private String email;

    private Boolean status = Boolean.TRUE;

    public Entidade() {
    }

    public Entidade(String nome,
                    String cpfOuCnpj,
                    String endereco,
                    String cidade,
                    String bairro,
                    String estado,
                    String telefone,
                    String celular,
                    String email,
                    Boolean status) {
        this.nome = nome;
        this.cpfOuCnpj = cpfOuCnpj;
        this.endereco = endereco;
        this.cidade = cidade;
        this.bairro = bairro;
        this.estado = estado;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
        this.status = status;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpfOuCnpj() {
        return cpfOuCnpj;
    }

    public void setCpfOuCnpj(String cpfOuCnpj) {
        this.cpfOuCnpj = cpfOuCnpj;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Entidade{" +
                "codigo='" + codigo + '\'' +
                ", nome='" + nome + '\'' +
                ", cpfOuCnpj='" + cpfOuCnpj + '\'' +
                ", endereco='" + endereco + '\'' +
                ", cidade='" + cidade + '\'' +
                ", bairro='" + bairro + '\'' +
                ", estado='" + estado + '\'' +
                ", telefone='" + telefone + '\'' +
                ", celular='" + celular + '\'' +
                ", email='" + email + '\'' +
                ", status=" + status +
                '}';
    }
}
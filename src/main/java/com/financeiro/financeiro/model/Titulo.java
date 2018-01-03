package com.financeiro.financeiro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import java.math.BigDecimal;
import java.util.Date;

@Document(collection = "titulo")
public class Titulo {

    @Id
    private String codigo;

    private String descricao;

    private String tipoPagamento;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dataDeEmissao;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dataDeValidade;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dataDoPagamento;

    @NumberFormat(pattern = "#,##0.00")
    private BigDecimal valor;

    @NumberFormat(pattern = "#,##0.00")
    private BigDecimal valorPago;

    @NumberFormat(pattern = "#,##0.00")
    private BigDecimal valorOriginal;

    private Boolean status = Boolean.TRUE;
    @DBRef
    private Entidade entidade;

    private String tipo;

    private String situacao;

    public Titulo() {
    }

    public Titulo(String descricao,
                  String tipoPagamento,
                  Date dataDeEmissao,
                  Date dataDeValidade,
                  Date dataDoPagamento,
                  BigDecimal valor,
                  BigDecimal valorPago,
                  BigDecimal valorOriginal,
                  Boolean status,
                  Entidade entidade,
                  String tipo,
                  String situacao) {
        this.descricao = descricao;
        this.tipoPagamento = tipoPagamento;
        this.dataDeEmissao = dataDeEmissao;
        this.dataDeValidade = dataDeValidade;
        this.dataDoPagamento = dataDoPagamento;
        this.valor = valor;
        this.valorPago = valorPago;
        this.valorOriginal = valorOriginal;
        this.status = status;
        this.entidade = entidade;
        this.tipo = tipo;
        this.situacao = situacao;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getTipoPagamento() {
        return tipoPagamento;
    }

    public void setTipoPagamento(String tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }

    public Date getDataDeEmissao() {
        return dataDeEmissao;
    }

    public void setDataDeEmissao(Date dataDeEmissao) {
        this.dataDeEmissao = dataDeEmissao;
    }

    public Date getDataDeValidade() {
        return dataDeValidade;
    }

    public void setDataDeValidade(Date dataDeValidade) {
        this.dataDeValidade = dataDeValidade;
    }

    public Date getDataDoPagamento() {
        return dataDoPagamento;
    }

    public void setDataDoPagamento(Date dataDoPagamento) {
        this.dataDoPagamento = dataDoPagamento;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public BigDecimal getValorPago() {
        return valorPago;
    }

    public void setValorPago(BigDecimal valorPago) {
        this.valorPago = valorPago;
    }

    public BigDecimal getValorOriginal() {
        return valorOriginal;
    }

    public void setValorOriginal(BigDecimal valorOriginal) {
        this.valorOriginal = valorOriginal;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Entidade getEntidade() {
        return entidade;
    }

    public Titulo setEntidade(Entidade entidade) {
        this.entidade = entidade;
        return this;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    @Override
    public String toString() {
        return "Titulo{" +
                "codigo='" + codigo + '\'' +
                ", descricao='" + descricao + '\'' +
                ", tipoPagamento='" + tipoPagamento + '\'' +
                ", dataDeEmissao=" + dataDeEmissao +
                ", dataDeValidade=" + dataDeValidade +
                ", dataDoPagamento=" + dataDoPagamento +
                ", valor=" + valor +
                ", valorPago=" + valorPago +
                ", valorOriginal=" + valorOriginal +
                ", status=" + status +
                ", entidade=" + entidade +
                ", tipo='" + tipo + '\'' +
                ", situacao='" + situacao + '\'' +
                '}';
    }
}
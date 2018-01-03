package com.financeiro.financeiro.service;

import com.financeiro.financeiro.model.Entidade;

import java.util.List;

public interface EntidadeService {

    Entidade saveEntidade(Entidade titulo);

    Entidade findByIdEntidade(String id);

    List<Entidade> findAllEntidades();
}

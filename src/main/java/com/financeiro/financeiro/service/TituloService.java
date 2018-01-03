package com.financeiro.financeiro.service;

import com.financeiro.financeiro.model.Titulo;

import java.util.List;

public interface TituloService {

    Titulo saveTitulo(Titulo titulo);

    Titulo findByIdTitulo(String id);

    List<Titulo> findAllTitulos();
}

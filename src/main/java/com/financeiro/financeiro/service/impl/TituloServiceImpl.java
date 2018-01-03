package com.financeiro.financeiro.service.impl;

import com.financeiro.financeiro.model.Titulo;
import com.financeiro.financeiro.repository.EntidadeRepository;
import com.financeiro.financeiro.repository.TituloRepository;
import com.financeiro.financeiro.service.TituloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TituloServiceImpl implements TituloService {

    private final TituloRepository tituloRepository;
    private final EntidadeRepository entidadeRepository;

    @Autowired
    public TituloServiceImpl(TituloRepository tituloRepository, EntidadeRepository entidadeRepository) {
        this.tituloRepository = tituloRepository;
        this.entidadeRepository = entidadeRepository;
    }

    @Override
    public Titulo saveTitulo(Titulo titulo) {
        titulo.setEntidade(entidadeRepository.findByNome(titulo.getEntidade().getNome()));
        return tituloRepository.save(titulo);
    }

    @Override
    public Titulo findByIdTitulo(String id) {
        return tituloRepository.findOne(id);
    }

    @Override
    public List<Titulo> findAllTitulos() {
        return tituloRepository.findAll();
    }
}

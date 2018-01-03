package com.financeiro.financeiro.service.impl;

import com.financeiro.financeiro.model.Entidade;
import com.financeiro.financeiro.repository.EntidadeRepository;
import com.financeiro.financeiro.service.EntidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntidadeServiceImpl implements EntidadeService {

    private final EntidadeRepository entidadeRepository;

    @Autowired
    public EntidadeServiceImpl(EntidadeRepository entidadeRepository) {
        this.entidadeRepository = entidadeRepository;
    }

    public Entidade findByNome(String nome) {
        return entidadeRepository.findByNome(nome);
    }

    @Override
    public Entidade saveEntidade(Entidade entidade) {
        return entidadeRepository.save(entidade);
    }

    @Override
    public Entidade findByIdEntidade(String id) {
        return entidadeRepository.findOne(id);
    }

    @Override
    public List<Entidade> findAllEntidades() {
        return entidadeRepository.findAll();
    }
}

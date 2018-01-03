package com.financeiro.financeiro.repository;

import com.financeiro.financeiro.model.Entidade;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntidadeRepository extends MongoRepository<Entidade, String> {

    Entidade findByNome(String nome);
}

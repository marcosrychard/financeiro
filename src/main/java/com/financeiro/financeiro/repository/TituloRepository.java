package com.financeiro.financeiro.repository;

import com.financeiro.financeiro.model.Titulo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TituloRepository extends MongoRepository<Titulo, String> {
}

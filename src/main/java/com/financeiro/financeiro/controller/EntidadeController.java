package com.financeiro.financeiro.controller;

import com.financeiro.financeiro.model.Entidade;
import com.financeiro.financeiro.service.impl.EntidadeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/entidade")
public class EntidadeController {

    private final EntidadeServiceImpl entidadeService;

    @Autowired
    public EntidadeController(EntidadeServiceImpl entidadeService) {
        this.entidadeService = entidadeService;
    }

    @PostMapping
    public ResponseEntity<Entidade> save(@RequestBody Entidade entidade) {

        return ResponseEntity.ok(entidadeService.saveEntidade(entidade));
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<Entidade> findByNome(@PathVariable String nome) {
        return ResponseEntity.ok(entidadeService.findByNome(nome));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entidade> findById(@PathVariable String id) {
        return ResponseEntity.ok(entidadeService.findByIdEntidade(id));
    }

    @GetMapping
    public ResponseEntity<List<Entidade>> findAll() {
        return ResponseEntity.ok(entidadeService.findAllEntidades());
    }

}

package com.financeiro.financeiro.controller;

import com.financeiro.financeiro.model.Titulo;
import com.financeiro.financeiro.service.impl.TituloServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/titulo")
public class TituloController {

    private final TituloServiceImpl tituloService;

    @Autowired
    public TituloController(TituloServiceImpl tituloService) {
        this.tituloService = tituloService;
    }

    @PostMapping
    public ResponseEntity<Titulo> save(@RequestBody Titulo titulo) {
        try {
            return ResponseEntity.ok(tituloService.saveTitulo(titulo));
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Titulo> findById(@PathVariable String id) {
        return ResponseEntity.ok(tituloService.findByIdTitulo(id));
    }

    @GetMapping
    public ResponseEntity<List<Titulo>> findAll() {
        return ResponseEntity.ok(tituloService.findAllTitulos());
    }

}

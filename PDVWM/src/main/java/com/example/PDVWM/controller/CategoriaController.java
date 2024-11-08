package com.example.PDVWM.controller;

import com.example.PDVWM.model.Categoria;
import com.example.PDVWM.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping("/guardar")
    public ResponseEntity<Categoria> guardar(@RequestBody Categoria categoria) {
        System.out.println("Recibido: " + categoria.getNombre());

        // Verifica si el cuerpo de la solicitud está llegando correctamente
        if (categoria.getNombre() == null || categoria.getNombre().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Categoria nuevaCategoria = categoriaService.guardarCategoria(categoria);
        return new ResponseEntity<>(nuevaCategoria, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Categoria>> getAllCategorias() {
        List<Categoria> categorias = categoriaService.getAllCategorias();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }
}

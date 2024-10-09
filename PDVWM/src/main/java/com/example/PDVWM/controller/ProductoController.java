package com.example.PDVWM.controller;

import com.example.PDVWM.model.Producto;
import com.example.PDVWM.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // Obtener todos los productos
    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    // Crear un nuevo producto
    @PostMapping
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.saveProducto(producto);
    }

    // Obtener un producto por ID
    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable int id) {
        return productoService.getProductoById(id);
    }

    // Eliminar un producto
    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable int id) {
        productoService.deleteProducto(id);
    }
}

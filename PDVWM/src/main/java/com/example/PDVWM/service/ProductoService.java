package com.example.PDVWM.service;

import com.example.PDVWM.model.Producto;
import com.example.PDVWM.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    // Método para obtener todos los productos
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    // Método para guardar un producto
    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    // Método para buscar un producto por su ID
    public Producto getProductoById(int id) {
        return productoRepository.findById(id).orElse(null);
    }

    // Método para eliminar un producto
    public void deleteProducto(int id) {
        productoRepository.deleteById(id);
    }
}
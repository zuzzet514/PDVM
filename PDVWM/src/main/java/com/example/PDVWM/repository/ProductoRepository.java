package com.example.PDVWM.repository;

import com.example.PDVWM.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Aquí puedes agregar métodos personalizados si los necesitas, por ejemplo:
    // List<Producto> findByNombre(String nombre);
}

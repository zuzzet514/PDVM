package com.example.PDVWM.model;

public class Producto {
    private int idProducto;
    private String nombre;
    private String descripcion;
    private double precio;
    private String codigoBarra;
    private String marca;
    private Categoria categoria;

    Producto(String nombre, String descripcion, double precio, String codigoBarra, String marca, Categoria categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.codigoBarra = codigoBarra;
        this.marca = marca;
        this.categoria = categoria;
    }

    Producto(String nombre, double precio, String codigoBarra, String marca, Categoria categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.codigoBarra = codigoBarra;
        this.marca = marca;
        this.categoria = categoria;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getCodigoBarra() {
        return codigoBarra;
    }

    public void setCodigoBarra(String codigoBarra) {
        this.codigoBarra = codigoBarra;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

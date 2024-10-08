package com.example.PDVWM.model;

import java.time.LocalTime;
import java.util.Date;

public abstract class Suministro {
    private int idSuministro;
    private Date fechaSuministro;
    private LocalTime horaSuministro;
    private int cantidadSuministrada;
    private Producto productoSuministrado;

    public abstract void suministrar();

    public int getIdSuministro() {
        return idSuministro;
    }

    public void setIdSuministro(int idSuministro) {
        this.idSuministro = idSuministro;
    }

    public Date getFechaSuministro() {
        return fechaSuministro;
    }

    public void setFechaSuministro(Date fechaSuministro) {
        this.fechaSuministro = fechaSuministro;
    }

    public LocalTime getHoraSuministro() {
        return horaSuministro;
    }

    public void setHoraSuministro(LocalTime horaSuministro) {
        this.horaSuministro = horaSuministro;
    }

    public int getCantidadSuministrada() {
        return cantidadSuministrada;
    }

    public void setCantidadSuministrada(int cantidadSuministrada) {
        this.cantidadSuministrada = cantidadSuministrada;
    }

    public Producto getProductoSuministrado() {
        return productoSuministrado;
    }

    public void setProductoSuministrado(Producto productoSuministrado) {
        this.productoSuministrado = productoSuministrado;
    }
}

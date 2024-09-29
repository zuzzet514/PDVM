package model;

import java.util.Date;

public abstract class Suministro {
    private int idSuministro;
    private Date fechaSuministro;
    private String hora;
    private Producto producto;

    public Suministro() {
    }

    public abstract void suministrar();
}

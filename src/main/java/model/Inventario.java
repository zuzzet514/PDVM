package model;

import java.util.ArrayList;

public class Inventario {
    private int idProducto;
    private int stockActual;
    private int stockMinimo;
    private static Inventario inventario = null;
    private static final ArrayList<Producto> productosDelNegocio = new ArrayList<>();

    private Inventario() {

    }

    public static Inventario getInventario() {
        if (inventario == null) {
            inventario = new Inventario();
        }

        return inventario;
    }

}

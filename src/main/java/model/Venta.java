package model;

import java.util.ArrayList;
import java.util.Date;

public class Venta {
    private int idVenta;
    private Date fechaVenta;
    private String horaVenta;
    private int unidadesVendidas;
    private int totalProductos;
    private double montoTotal;
    private double cambio;
    private ArrayList<Producto> productos;
}

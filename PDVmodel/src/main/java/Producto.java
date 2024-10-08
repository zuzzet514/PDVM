public class Producto {
    private static int numeroProducto;
    private int idProducto;
    private String nombre;
    private String descripcion;
    private double precio;
    private String codigoBarra;
    private String marca;
    private Categoria categoria;

    public Producto(String nombre, String descripcion, double precio, String codigoBarra, String marca, Categoria categoria) {
        this.idProducto = ++numeroProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.codigoBarra = codigoBarra;
        this.marca = marca;
        this.categoria = categoria;
    }

    public Producto(String nombre, double precio, String codigoBarra, String marca, Categoria categoria) {
        this.idProducto = ++numeroProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.codigoBarra = codigoBarra;
        this.marca = marca;
        this.categoria = categoria;
    }

    public int getIdProducto() {
        return idProducto;
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

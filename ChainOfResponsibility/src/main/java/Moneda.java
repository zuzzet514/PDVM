public class Moneda {
    private int denominacion;
    private boolean aceptada;

    public Moneda(int denominacion) {
        this.denominacion = denominacion;
    }

    public int getDenominacion() {
        return denominacion;
    }

    public boolean isAceptada() {
        return aceptada;
    }

    public void setAceptada(boolean aceptada) {
        this.aceptada = aceptada;
    }
}

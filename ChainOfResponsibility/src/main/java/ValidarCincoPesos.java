public class ValidarCincoPesos implements ManejadorMoneda {
    private ManejadorMoneda siguiente;

    @Override
    public void establecerSiguiente(ManejadorMoneda m) {
        siguiente = m;
    }

    @Override
    public void manejar(Moneda moneda) {
        System.out.print("Moneda de 5 pesos: ");
        if (moneda.getDenominacion() == 5) {
            System.out.println("Moneda aceptada. ");
            moneda.setAceptada(true);
        }else {
            System.out.println("Moneda no aceptada :(");
            siguiente.manejar(moneda);
        }
    }
}

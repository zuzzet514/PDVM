    public interface ManejadorMoneda {
        void establecerSiguiente(ManejadorMoneda siguiente);
        void manejar(Moneda moneda);
    }

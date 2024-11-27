import java.util.Scanner;

public class MaquinaDispensadora {
    public static void main(String[] args) {
        Scanner i = new Scanner(System.in);

        ValidarUnPeso validarPeso = new ValidarUnPeso();
        ValidarCincoPesos validarCinco = new ValidarCincoPesos();
        ValidarDiezPesos validadDiez = new ValidarDiezPesos();

        validarPeso.establecerSiguiente(validarCinco);
        validarCinco.establecerSiguiente(validadDiez);

        Moneda m;

        while(true){
            System.out.println("Ingrese una moneda:");
            int moneda = i.nextInt();
            m = new Moneda(moneda);

            System.out.println("- Procesando moneda de " + m.getDenominacion());
            validarPeso.manejar(m);

            System.out.println("------------------------------");

        }
    }
}

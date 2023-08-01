
import java.util.*;

public class Estructuras {
    
    /* 
    * NUM DIVISIBLE POR 2
    */

    public static String divisble2(int a){
        if(a%2 == 0) 
            return "Es divisble";
        else 
            return "No es divisble ";
    }

    /* 
     * SALUDOS
     */
    public static void saluda(int numSaludos){
        for(int i=0; i<=numSaludos; i++){
            System.out.println("HOLA BUENOS DIAS");
        }
    }

    public static void main(String[] args) {

        System.out.println("Introduce un numero para saber si es divisible.");
        Scanner scanner = new Scanner(System.in);
        int NumImput = scanner.nextInt();
        System.out.println(divisble2(NumImput));

        
        System.out.println("Introduce el Numero de Saludos");
        int numSaludos = scanner.nextInt();
        if (numSaludos < 0) {
            numSaludos = 0;
        }
        saluda(numSaludos);
        System.out.println("");
        scanner.close();    


        char[] abecedario = {
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
            int count = abecedario.length;
            do {

                for(int i = count-1; i >= 0 ; i--) {
                    System.out.print(abecedario[i]);
                    }
                    System.out.println("");
                count--;
            } while (count > 0);

            count = abecedario.length;
            do {

                for(int i = 0; i <= count-1 ; i++) {
                    System.out.print(abecedario[i]);
                    }
                    System.out.println("");
                count--;
            } while (count > 0);
    
    }
}

import java.util.Random;
import java.util.Scanner;  

public class Condicionales {
    public static void main(String[] args) {
        
        /* 
         * 
         * 
         * 
         * 
         * 1. NUMERO ALEATORIO
         * 
         * 
         * 
         * 
         */
        Random randomBool = new Random();
        
        
        String RojoNegro = randomBool.nextBoolean() == true ? "Rojo" : "Negro"; 
        System.out.println(RojoNegro);       
        /* 
         * 
         * 
         * 2. TEMPERATURA Y CATEGORIA DEL CLIMA
         * 
         * 
         * 
         */

        float temperatura = 12.4f;
        if(temperatura < 10){
            System.out.println("Categoria Climatica: Climas Frios");

            if(temperatura < 5)
                System.out.println("Tipo de Clima : Polar");
            else
                System.out.println("Tipo de Clima : Alta Montaña");
        }
        else if(temperatura >= 20){
            System.out.println("Categoria Climatica: Climas Cálidos");

            if(temperatura >= 20 && temperatura < 23.5f)
                System.out.println("Tipo de Clima : Ecuatorial");
            else if(temperatura >= 23 && temperatura < 26.5f)
                System.out.println("Tipo de Clima : Tropical");
            else
                System.out.println("Tipo de Clima : Desértico");
        }
        else{
            System.out.println("Categoria Climatica: Climas Templados");

            if(temperatura >= 10 && temperatura < 13.5f)
                System.out.println("Tipo de Clima : Oceanico");
            else if(temperatura >= 13.5f && temperatura < 16.5f)
                System.out.println("Tipo de Clima : Mediterráneo");
            else
                System.out.println("Tipo de Clima : Continental");
        }

        /* 
         * 
         * 3. NUMERO A TEXTO
         * 
         */
        int Numero1a9 = 2;
        switch(Numero1a9){
            case 1:
                System.out.println("uno");
                break;
            case 2:
                System.out.println("dos");
                break;
            case 3:
                System.out.println("tres");
                break;
            case 4:
                System.out.println("cuatro");
                break;
            case 5:
                System.out.println("cinco");
                break;
            case 6:
                System.out.println("seis");
                break;
            case 7:
                System.out.println("siete");
                break;
            case 8:
                System.out.println("ocho");
                break;
            case 9:
                System.out.println("nueve");
                break;
            case 0:
                System.out.println("cero");
                break;
            default:
                System.out.println("");
                break;
        }

        /* 
         * 
         * 4. IFELSE A TERNARIO
         * 
         */

        double number = 55;

        String result = (number > 0) ? "Es postivo" : (number < 0) ? "¡Es negativo!" : "¡Es cero!";
        System.out.println(result);
    }
}

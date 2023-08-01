import java.util.Random;
import java.util.Scanner;  

public class ParoImpar {
    public static void main(String[] args) {
        Scanner readNum = new Scanner(System.in);
        Random randomBool = new Random();
        System.out.println("Introduce un Numero");
        int inputNum = readNum.nextInt();

        if(inputNum % 2 == 0) {
            System.out.println("Par");
        }
        else{
            System.out.println("Impar");
        }
        if(randomBool.nextBoolean() == true) {
            System.out.println("Blanco");
        }
        else {
            System.out.println("Negro");
        };

        
    }
}

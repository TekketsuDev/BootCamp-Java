public class Arbol {
    public static void main(String[] args) {
        for(int numBlancos = 10-1,numAsteriscos=2; numBlancos>=0; numBlancos--, numAsteriscos += 2){
            //Espacios en blanco
            for(int i=1;i<=numBlancos;i++){
                System.out.print(" ");
            }
            //Asteriscos
            for(int j=1;j<=numAsteriscos;j++){
                System.out.print("*");
            }
            System.out.println();
            
        }
        
        System.out.println("        ****");
        System.out.println("        ****");
    }
}

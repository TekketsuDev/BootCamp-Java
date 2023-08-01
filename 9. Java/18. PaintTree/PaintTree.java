public class PaintTree {
    public static void main(String[] args) {
        for(int numBlancos = 10-1,numAsteriscos=2; numBlancos>=0; numBlancos--, numAsteriscos += 2){
            //Espacios en blanco
            for(int i=1;i<=numBlancos;i++){
                System.out.print(" ");
            }
            //Asteriscos
            for(int j=1;j<=numAsteriscos;j++){
                System.out.print("\033[0;42m*\033[0m");
            }
            System.out.println();
            
        }
        
        System.out.println("        \033[48;5;52m****\033[0m");
        System.out.println("        \033[48;5;52m****\033[0m");
    }
}

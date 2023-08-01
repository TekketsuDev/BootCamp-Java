public class Break {
    public static void main(String[] args) {
        for (int i = 0; i < 6; i++) {
            System.out.println("Numero de iteraciones: " + (i+1));
            if(i == 2) {
                break;
            }
        }
    }
}

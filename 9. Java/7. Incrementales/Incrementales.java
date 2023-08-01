public class Incrementales {
    private static int numero = 0;
    public static void incrementar(){
        numero++;
    }
    public static void decrementar(){
        numero--;
        numero--;
    }
    public static void main(String[] args) {
        incrementar();
        decrementar();
        System.out.println(numero);
    }
}

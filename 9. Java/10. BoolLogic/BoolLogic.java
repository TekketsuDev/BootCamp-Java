public class BoolLogic {
    public static void main(String[] args) {
        boolean bool1 = true;
        boolean bool2 = false;
        boolean bool3 = false;

        if(bool1 ==! bool2){
            System.out.println("bool1 es igual al valor invertido de bool2");
        }
        if(bool2 == !bool3){
            System.out.println("bool1 es igual a bool2");
        }
        else{
            System.out.println("bool2 no es igual al valor invertido de bool3");
        }
    }
}

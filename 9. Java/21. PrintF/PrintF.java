public class printF{
    public static void main(String[] args) {
        System.out.printf("%s \t%s \t%s%n","Victor","Jamet","Soler");
        System.out.printf("%s %7s %10s%n","Victor","Jamet","Soler");
        System.out.printf("%3$s, %2$s, %1$s%n","Victor","Jamet","Soler");
        System.out.printf("%3$s,%2$s,%1$s%n","Victor","Jamet","Soler");
        System.out.printf("%6s%n","22");
        System.out.printf("%010d%n",22);
        System.out.printf("%09.2f%n",17.1829327);

    }


}
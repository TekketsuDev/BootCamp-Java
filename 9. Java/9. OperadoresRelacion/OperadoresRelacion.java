public class OperadoresRelacion {

    public static void checkRelation(int var1, int var2) {
        if(var1 == var2){
            System.out.println(var1 + " es igual a " + var2);
        }
        else if (var1 > var2){
            System.out.println(var1 + " es mas grande que " + var2);
        }
        else if(var1 < var2){
            System.out.println(var1 + " es mas peque\u00f1o que " + var2);
        }
        }
    public static void main(String[] args) {
        int num1 = 1;
        int num2 = 2;
        int num3 = 3;
        int num4 = 4;
        
        checkRelation(num4,num2);
        checkRelation(num2,num3);
        checkRelation(num1,num3);
    
    }
}

public class Conversiones{
    public static void main (String[] args){

        double numDouble = Double.MAX_VALUE;
        float numFloat = (float) numDouble;
        long numLong = (long) numDouble;
        int numInt = (int) numDouble;
        short numShort = (short) numDouble;
        byte numByte = (byte) numDouble;
        System.out.println("Escala Descendente de tipos de datos:");
        System.out.println("Escala Ascendente de tipos de datos:");
        System.out.println("Valor double: " + numDouble);
        System.out.println("Valor float: " + numFloat);
        System.out.println("Valor long: " + numLong);
        System.out.println("Valor int: " + numInt);
        System.out.println("Valor short: " + numShort);
        System.out.println("Valor byte: " + numByte);


        byte valorByte = 10;
        short valorShort = valorByte; // Conversión de byte a short
        int valorInt = valorShort; // Conversión de short a int
        long valorLong = valorInt; // Conversión de int a long
        float valorFloat = valorLong; // Conversión de long a float
        double valorDouble = valorFloat; // Conversión de float a double
    
        System.out.println("Escala Ascendente de tipos de datos:");
        System.out.println("Valor byte: " + valorByte);
        System.out.println("Valor short: " + valorShort);
        System.out.println("Valor int: " + valorInt);
        System.out.println("Valor long: " + valorLong);
        System.out.println("Valor float: " + valorFloat);
        System.out.println("Valor double: " + valorDouble);

        byte xCien = 100;
        System.out.println(xCien);
        xCien *= 2;

        //Byte tiene un data range de 127 a -128 por lo que al multiplicar su valor no permite apliarlo a 200 ya que su valor maximo es 127
        
    }


}
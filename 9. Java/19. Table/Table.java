public class Table {

    public static void tabletypeData(Object type) {
        Object current = new type();
        System.out.println("Rango " + type + " desde: " + type.MAX_VALUE);
    }

    public static void main(String[] args) {
        Object[] typesDatas = {Byte.class, String.class};
        for (Object typeData : typesDatas) {
            tabletypeData(typeData);
        }
    }
}

/* 
    ACABAR EN PAGINA 294
 */
public class Funciones {
    public static String javaOrNull(String value) {
        return value;
    }
    public static boolean login(String user, String password) {
        if(user == "admin" && password == "1234")
            return true;
        else
            return false;
    }
    public static void main(String[] args) {
        System.out.println(javaOrNull("null"));
        System.out.println(javaOrNull("java"));
    
        System.out.println(login("holi","1234"));
        System.out.println(login("admin","1234"));
    }
}

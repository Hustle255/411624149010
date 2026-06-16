// import java.util.*;
// public class strings{
//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         System.out.print("enter string ln");
//         String n=sc.nextLine();
//         String name=new String(n);
//         for ( int i=0;i<=n.length();i++){
//             System.out.println(name[i].charAt(length()));

//         }
        
//     }
// }

import java.util.*;

public class Strings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter string: ");
        String name = sc.next();

        System.out.print("Enter index: ");
        int index = sc.nextInt();

        int l=name.length();
        for(int i=0; i<=l; i++){
            if(i==index){
                System.out.println("Character at index " + index + " is " + name.charAt(i));
            }
       }
        sc.close();
    }
}
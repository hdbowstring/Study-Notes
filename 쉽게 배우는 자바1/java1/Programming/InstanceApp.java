import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

public class InstanceApp {

	public static void main(String[] args) throws IOException {
		
		PrintWriter p1 = new PrintWriter("result1.txt"); 
		// 하나의 클래스를 앞에 new를 붙여 복제해서 각각 다른 상태를 갖고 있는 instance(p1)를 만들어 사용하면 편리
		// 클래스가 하는 작업이 일회용이 아니라 계속 이어질때
		// new 뒤에 붙인 애가 constructor, 복제되어 instance가 됨
		// instance에 어떤 값이 올 수 있느냐를 규제하기 위하여 앞에 class 이름을 적어줌
		
		p1.write("Hello 1");
		p1.close();
		
		PrintWriter p2 = new PrintWriter("result2.txt");
		p2.write("Hello 2");
		p2.close();
		System.out.println(p1.toString());
		p2.toString();
		
//		PringWriter.write("result1.txt", "Hello 1");
//		PringWriter.write("result2.txt", "Hello 2");
//		PringWriter.write("result1.txt", "Hello 1");
//		PringWriter.write("result2.txt", "Hello 2");
//		PringWriter.write("result1.txt", "Hello 1");
//		PringWriter.write("result2.txt", "Hello 2");
		
	}

}

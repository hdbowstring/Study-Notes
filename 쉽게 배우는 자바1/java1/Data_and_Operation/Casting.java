
public class Casting {

	public static void main(String[] args) {
		
		// casting : 데이터 타입 변환 (자료형 변환하는 연산)

		double a = 1.1;
		double b = 1; // 손실이 없기때문에 자동으로 casting 해줌
		double b2 = (double) 1;
 		System.out.println(b);
		
//      int c = 1.1; // cannot convert from double to int 손실이 있으니까
		double d = 1.1; // 빨간줄 오류에 마우스 갖다대면 이클립스가 빠르게 수정하는 방법 보여줌~ 굿굿
		int e = (int) 1.1; // 손실이 있기 때문에 명시적으로만 형 변화를 해야함 (강제로 integer로 바꿈)
		System.out.println(e); // 1
		
		// 1 to String
		String f = Integer.toString(1);
		System.out.println(f.getClass());
		
		// 1.1 to String
		String g = Double.toString(1.1);
		System.out.println(g);
		System.out.println(g.getClass());

	}

}

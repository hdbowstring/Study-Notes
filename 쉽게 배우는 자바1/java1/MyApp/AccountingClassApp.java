class Accounting{
	public double valueofsupply; //지역변수에서 전역변수로 바꿈
	public double vatRate;
	public double expenseRate;	
	public void print() {
		System.out.println("Value of supply : "+valueofsupply);
		System.out.println("VAT : "+getVAT());
		System.out.println("Total : "+getTotal());
		System.out.println("Expense : "+getExpense());
		System.out.println("Income : "+getIncome());
		System.out.println("Dividend 1 : "+getDividend1());
		System.out.println("Dividend 2 : "+getDividend2());
		System.out.println("Dividend 3 : "+getDividend3());
	}

	private double getDividend1() {
		return getIncome() * 0.5;
	}
	private double getDividend2() {
		return getIncome() * 0.3;
	}
	private double getDividend3() {
		return getIncome() * 0.2;
	}


	private double getIncome() {
		return valueofsupply - getExpense();
	}

	private double getExpense() {
		return valueofsupply*expenseRate;
	}

	private double getTotal() {
		return valueofsupply + getVAT(); // 변수를 쓸수도 있지만 함수를 써서 호출
	}

	private double getVAT() {   //전역변수로 바꿔 괄호안을 비웠다.
		return valueofsupply*vatRate; 
	}

}

public class AccountingClassApp {

	public static void main(String[] args) {

//		Accounting.valueofsupply = 10000.0; // Accounting이라는 클래스의 이름을 앞에 붙여줌
//		Accounting.vatRate = 0.1;           // Accounting에 소속된 것을 분명히함. 소속관계 명확하여 다른 코드들과 뒤섞여도 헷갈리지 않음
//		Accounting.expenseRate = 0.3;       // print와 같이 흔한 이름을써도 같은 이름의 메소드들이 공존할수 있게됨 클래스가 다르다면.
		
//		double VAT = getVAT(); // 계산하는 코드가 엄청 길었다면 함수를 써서 숨긴 것. 전역변수로 바꿔 괄호안을 비웠다
//		double total = getTotal();
//		double expense = getExpense();
//		double Income = getIncome();
//		double dividend1 = getDividend1(); // = Income * 0.5;
//		double dividend2 = getDividend2(); // = Income * 0.3;
//		double dividend3 = getDividend3(); // = Income * 0.2;
//		더블변수를 쓰는 곳에 함수를 넣었으니 필요없어져서 주석처리
		
//		Accounting.print();
		// anotherVariable = ...;
		// anotherMethod = ...;

		// instance // 코드 사용되려면 맨위에 클래스안에 코드에 퍼블릭 뒤에 스태틱 다 지워야
		Accounting a1 = new Accounting(); // new는 Accounting 클래스를 복제하는 명령. a1은 그 이름. a1이라는 변수의 값은 Accounting의 복제본만 들어올수 있다는 뜻으로 앞에 Accounting 붙임
		a1.valueofsupply = 10000.0;
		a1.vatRate = 0.1;
		a1.expenseRate = 0.3;
		a1.print();
		
		Accounting a2 = new Accounting(); // new는 Accounting 클래스를 복제하는 명령. a1은 그 이름. a1이라는 변수의 값은 Accounting의 복제본만 들어올수 있다는 뜻으로 앞에 Accounting 붙임
		a2.valueofsupply = 20000.0;
		a2.vatRate = 0.05;
		a2.expenseRate = 0.2;
		a2.print();
		
		// a1 인스턴스는 a2 작업이 끝난 후에도 남아있어 다시 a1 실행해도 같은 결과. 클래스 하나만을 이용해 값을 조정하고 복원하는 것을 거듭할 필요가 없어진다.
	}

	
}

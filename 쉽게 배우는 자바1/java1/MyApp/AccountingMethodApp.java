
public class AccountingMethodApp {

	public static double valueofsupply; //지역변수에서 전역변수로 바꿈
	public static double vatRate;
	public static double expenseRate;

	public static void main(String[] args) {

		valueofsupply = 10000.0; 
		vatRate = 0.1;
		expenseRate = 0.3;
//		double VAT = getVAT(); // 계산하는 코드가 엄청 길었다면 함수를 써서 숨긴 것. 전역변수로 바꿔 괄호안을 비웠다
//		double total = getTotal();
//		double expense = getExpense();
//		double Income = getIncome();
//		double dividend1 = getDividend1(); // = Income * 0.5;
//		double dividend2 = getDividend2(); // = Income * 0.3;
//		double dividend3 = getDividend3(); // = Income * 0.2;
//		더블변수를 쓰는 곳에 함수를 넣었으니 필요없어져서 주석처리
		print();


	}

	private static void print() {
		System.out.println("Value of supply : "+valueofsupply);
		System.out.println("VAT : "+getVAT());
		System.out.println("Total : "+getTotal());
		System.out.println("Expense : "+getExpense());
		System.out.println("Income : "+getIncome());
		System.out.println("Dividend 1 : "+getDividend1());
		System.out.println("Dividend 2 : "+getDividend2());
		System.out.println("Dividend 3 : "+getDividend3());
	}

	private static double getDividend1() {
		return getIncome() * 0.5;
	}
	private static double getDividend2() {
		return getIncome() * 0.3;
	}
	private static double getDividend3() {
		return getIncome() * 0.2;
	}


	private static double getIncome() {
		return valueofsupply - getExpense();
	}

	private static double getExpense() {
		return valueofsupply*expenseRate;
	}

	private static double getTotal() {
		return valueofsupply + getVAT(); // 변수를 쓸수도 있지만 함수를 써서 호출
	}

	private static double getVAT() {   //전역변수로 바꿔 괄호안을 비웠다.
		return valueofsupply*vatRate; 
	}

}

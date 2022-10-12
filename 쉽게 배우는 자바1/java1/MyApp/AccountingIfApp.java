
public class AccountingIfApp {

	public static void main(String[] args) {

		double valueofsupply = Double.parseDouble(args[0]); //문자열을 그냥 더블에 넣으려고 하면 에러남
		double VatRate = 0.1;
		double expenseRate = 0.3;
		double VAT = valueofsupply*VatRate;
		double total = valueofsupply + VAT;
		double expense = valueofsupply*expenseRate;
		double Income = valueofsupply - expense;
		
		double dividend1;
		double dividend2;
		double dividend3;
		
		if(Income > 10000.0) {
		dividend1 = Income * 0.5;
		dividend2 = Income * 0.3;
		dividend3 = Income * 0.2;
		} else {
			dividend1 = Income * 1;
			dividend2 = Income * 0;
			dividend3 = Income * 0;
		}
		System.out.println("Value of supply : "+valueofsupply);
		System.out.println("VAT : "+VAT);
		System.out.println("Total : "+total);
		System.out.println("Expense : "+expense);
		System.out.println("Income : "+Income);
		System.out.println("Dividend 1 : "+dividend1);
		System.out.println("Dividend 2 : "+dividend2);
		System.out.println("Dividend 3 : "+dividend3);
		
		

	}

}

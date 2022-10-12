# <쉽게 배우는 자바1>
## 1. Java 프로그래밍 소개

### 1.1. 1~5장
  - 1991년, 제임스 고슬링
  - '한번 작성하면 어디서든 실행된다'
  - 자바로 작성된 소프트웨어는 자바가 설치된 컴퓨터라면 어디서든 실행이 가능
  - 웹 및 안드로이드의 애플리케이션 소프트웨어 개발
  - IDE로 Eclipse 설치
  - java 파일 형태로 소스코드 작성 -> 컴파일하여 JVM이 알아들을 수 있는 class 파일로 변환 -> 실행하면 JVM이 class 파일 읽음
  - .java 파일과 그 안의 class 이름은 같아야함
  - main : Java 프로그램이 맨먼저 실행하는 메서드
   
## 2. Java 프로그래밍 구성

### 2.1. 6~7장
  - 컴퓨터는 데이터를 가지고 연산을 하는 기계
  - 데이터의 종류 : 숫자(Numbers), 문자열(String), 영상/소리/기타 등등
  - 데이터마다 처리하는 방식이 달라 구분 필요
  - <details>
    <summary>Datatype 연습코드와 설명</summary>
    
    ```java
    public class Datatype{
	public static void main(String[] args) {
		System.out.println(6); // Number
		System.out.println("six"); // String
		
		System.out.println("6"); // String 6
		
		System.out.println(6+6); // 12
		System.out.println("6"+"6"); // 66
		
		System.out.println(6*6);
		//System.out.println("6"*"6"); 12번째줄 에러남
		
		System.out.println("1111".length());
		//System.out.println(1111.length()); 
    	}
        }
     ```
     
     숫자와 문자 데이터 타입과 연산

          숫자

          자바에서 숫자는 다른 기호와 함께 입력하지 않고 그대로 입력합니다.
          + 연산자는 덧셈의 연산을 수행합니다.
 

          문자
        
          자바에서 문자열은 쌍따옴표("") 안에 적습니다.
          + 연산자는 결합의 연산을 수행합니다.
          문자열 간에는 * 연산자를 사용할 수 없습니다.
          length 연산은 문자열의 길이를 반환합니다  
     </details>
   - sout 치고 Ctrl + Space를 치면 자동으로 입력해 주는 기능
   - //은 주석, 실행할 때 없는 것으로 취급
   - Math 클래스 : 수학과 관련된 것들을 모아놓음
   - <details>
     <summary>Number 연습코드</summary>
    
     ```java
    
      public class Number {

	    public static void main(String[] args) {
		// Operator 연산자
		System.out.println(6 + 2);
		System.out.println(6-2);
		System.out.println(6*2);
		System.out.println(6/2);
		
		System.out.println(Math.PI);
		System.out.println(Math.floor(Math.PI));
		System.out.println(Math.ceil(Math.PI));

	    }

        }
      ```
    
      </details>
   - 문자(Character)는 한 개의 문자만 포함
   - 이스케이프 기호 : \
   - 줄바꿈 : \n
   - 문자열 연산 : length, replace 해봄
   
### 2.2. 8장
   - 변수(Variable)를 지정할 떄 데이터 타입 먼저 선언
   - 변수의 데이터 타입을 바로바로 판단할 수 있게하기 위함
   - 변수는 재사용, 수정에 용이, 코드의 이름을 잘 지으면 가독성 향상
   - int, double, String
   - casting : 데이터 타입 변환 (자료형 변환하는 연산)
   
### 2.3. 9~10장
   - 프로그램 : 음악회와 같은 곳에서 연주할 곡들의 순서를 나타내는 것
   - 컴퓨터 언어를 이용해서 프로그램을 만드는 것은 업무의 자동화된 처리를 위해서
   - 괄호로 시작, 괄호로 끝나는 것 메서드라고 함
   - 컨트롤 + 스페이스 하고 필요한 것 클릭하면 임포트문까지 자동으로 써줌
   - 디버거
   - 멈추고 싶은 줄 왼쪽 클릭하여 브레이크 포인터 만들기 디버거로 실행하는? 벌레버튼 누르기
   - Step over는 명령어 하나만 실행
   - 터미네이트는 디버거 종료
   
## 3. Java 프로그래밍 시작하기

### 3.1. 11~12장

  - JOptionPane 객체의 showInputDialog 메소드를 이용하면 입력 다이어로그 창을 이용해서 id 값을 입력
  - Arguments (인자)
  - Argument 탭에서 Program arguments에 입력
  - 아규먼트를 입력하게 되면 main 메소드의 args 파라미터는 아규먼트 값을 받아서 동작
  - args는 문자열 배열(array)
  - 직접 컴파일하고 실행하기 (운영체제에 대한 지식 필요)
  - cmd 켜서 javac, java 이용 : javac -cp ".;lib" OkjavaGoinHome.java
  - 외부 라이브러리도 포함해서 실행 : java -cp ".;lib" OkjavaGoinHome
  - 아규먼트 입력하기 : java OkjavaGoinHomeinput "JAVA APT 507" 15.0
    
### 3.2. 13장
   
  - 자바는 자바의 도구들을 응용해서 사용하기 위해서 일정한 조작 장치를 구성 : 자바 API(Application Programming Interface)
  - 사용자가 자바 프로그램을 사용할 수 있도록 만들어둔 장치들을 UI(User Interface)
  - Package : Class 묶음
  - Class : 서로 연관된 변수, 메서드 묶음
  - Instance : 인스턴스는 클래스를 컴퓨터 상에서 실체화한 것
  - Math 클래스와 달리 PrintWriter 객체는 new 키워드를 통해 인스턴스를 생성하여 사용
  - 인스턴스를 생성할 수 있는 클래스는 자바 API Documentation에 Constructor Summary가 존재
  - 상속 : 자식에 해당하는 클래스는 부모에 해당하는 클래스의 모든 변수와 메소드를 사용할 수 있음
  - 이클립스 안에서 Open Type hierarchy를 이용하여 클래스의 상속관계를 확인
  - Object 클래스는 모든 클래스의 부모
  - 자식이 부모의 메소드와 이름이 똑같은 걸 사용한다면 자식의 것을 씀 (override)
  
### 3.3 14장
  
  - 회계앱 만들어보기
  - 이클립스에서 search 혹은 Find/Replace로 한꺼번에 변경가능
  - 변수로 지정하고자 하는 값을 지우고 이름을 바로 입력하면 이클립스에서 변수 생성을 도와줌
  - Alt + Shift + L : 우클릭 - 리팩터 - Extract Local Variable 한번에 변수로 만들기
  - Alt + 방향키 : 한줄 이동
  - 이렇게 프로그램의 기능은 바꾸지 않으면서 이해하기 쉽게 바꾸는 과정을 **리팩토링**
  - .class파일 복사해서 가져가면 다른컴터에서도 실행가능 (자바 런타임 환경이 있어야됨)
  - java의 제어문 : 프로그램의 실행 과정을 조건에 따라 바꾸는 것 - 조건문, 반복문
  - method 메소드: 클래스의 동작을 나타내는 함수 (서로 연관된 코드를 그룹핑해서 이름을 붙인 정리정돈의 상자)
  - Alt Shift M : 메소드 만들기
  - 지역변수에서 전역변수로 바꿔 괄호안 없애기
  - 객체 : 클래스라는 표현을 쓰기도.. 같은 내용은 아님.. 서로 연관된 변수와 메소드를 그룹핑하고 이름 붙인것. 정리정돈의 상자
  - 메소드, 클래스가 중요한 이유는 구조를 결정하기 때문
  - outline 열어서 클래스안에 소속된 멤버들 (변수, 메소드) 리스트를 보여줌
  - 만약 관련성이 떨어지는 다른 변수와 메소드들이 엄청 많이 들어있다면? 클래스가 도와줌. 파일로 치면 디렉토리 역할
  - 소속관계 명확히하여 다른 코드들과 뒤섞여도 헷갈리지 않음
  - 흔한 이름을써도 같은 이름의 메소드들이 공존할수 있게됨 클래스가 다르다면.
  - 객체지향의 양대산맥 : 클래스, 인스턴스
  - 인스턴스 : 클래스를 실제로 실행시킨 실체화된 클래스. 이를 통해 다양한 상태에 있는 여러 개의 클래스를 돌릴 수 있음
  - 인스턴스 : 하나의 클래스를 복제해서 서로 다른 데이터의 값과 서로 같은 메소드를 가진 복제본을 만드는 것
  - 만약 지금의 앱에서 다른 제품(공급가와 부가가치세 비율이 다른)의 작업을 해야한다면?
  - 이렇게 클래스의 내부적인 상태(변수)를 계속 변경하면 버그 유발될 가능성 증가하므로 instance 사용
  - 메소드로 구조를 잡고 메소드와 변수를 그룹핑해서 클래스로 구조를 잡고 클래스를 복제한 인스턴스를 이용해 또 구조를 만들어 코드의 성을 쌓아가는 것이 java언어의 특징이며 많은 언어들이 따르고 있는 특징.

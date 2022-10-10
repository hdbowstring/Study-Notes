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
   - casting : 데이터 타입 변환 (자료형 변환하는 연산)
   
### 2.3. 9장
   - 프로그램 : 음악회와 같은 곳에서 연주할 곡들의 순서를 나타내는 것
   - 컴퓨터 언어를 이용해서 프로그램을 만드는 것은 업무의 자동화된 처리를 위해서

# <웹 프론트엔드 시작하기 (리액트&리덕스)>

이벤트부터 최신버전인 오픈튜토리얼스 생활코딩 React 입문수업으로 듣고 퀴즈는 부스트코스에서
리덕스는 나중에

## 1. 리액트의 시작
  - 리액트 : facebook.com의 UI를 더 잘 만들기 위해서 페이스북에서 만든 Javascript UI 라이브러리
  - 컴포넌트 : 리액트에서는 사용자가 정의해서 태그를 만드는 것을 "사용자 정의 태그"라고 하지 않고 "컴포넌트" 라고 함
  - 컴포넌트의 기능 : 가독성, 재사용성, 유지보수 편리
  - 공부전략) 
  - CODING - 개발환경을 세팅하고 어느 부분의 코드를 바꿔야되는가 살펴보는 것 / 
  - RUN - 작성한 코드를 실행해서 결과를 보는 것 /
  - DEPLOY - 모든 작업이 끝난 다음에 최종적으로 사용자(고객)에게 전달하는 행위
  - 공부하면서 "나는 어떻게 하면 저 강사로부터 독립할수 있을까?" 끊임없이 자문. 독립하기 위한 가장 중요한 부분은 공식문서에 익숙해지는 것.
  - Tool Chain : 리액트로 앱을 개발할 때 목표를 달성하기 위해서 필요한 여러가지 개발환경, 도구 등을 잘 모아서 한 방에 제공해주는 굉장히 편리한 도구들
  - npm : Node.js 라고 하는 기술을 이용해서 만들어진 여러가지 앱들을 명령어 환경에서 아주 손쉽게 설치할 수 있도록 도와주는 도구. Node.js계의 앱스토어 같은 역할의 소프트웨어
  - 리액트가 제공하는 Tool Chain 중에서 "create react app"이라는 이름의 앱을 사용
  - npx : npm이 프로그램을 설치하는 프로그램이라면 npx는 프로그램을 임시로 설치해서 딱 한번만 실행시키고 지우는 프로그램. 
  - npx의 장점은 "컴퓨터의 공간을 낭비하지 않는다." , "실행할 때마다 다운로드를 새로 받기 때문에 항상 최신상태이다." 라는 것
  - vscode 터미널에서 "npm run start" 명령을 통해서 실행시킬 수 있음 

## 2. 리액트 맛보기
  - create-react-app이 제공하는 샘플 애플리케이션을 수정해보기
  - 디렉토리 구조 : src, public
  - public : index.html이 있음
  - index.html에는 id="root"가 있고 컴포넌트들을 이 안에 들어가도록 create-react-app은 약속해놓음
  - 개발자 도구에서 확인할 수 있음
  - 이 컴포넌트들은 src 디렉토리 안의 파일을 수정해서 만들 수 있음
  - 개발작업의 대부분의 파일은 src 디렉토리 안에 넣게 됨
  - 엔트리 파일, 즉 진입파일은 index.js
  - ReactDOM.render( <APP/> , document.getElementById('root') );
  - id값이 root인 태그를 선택하는 자바스크립트의 선택자같은 문법
  - <APP/> : 리액트를 통해 만든 사용자 정의 태그, 즉 컴포넌트
  - create-react-app이 sample로 만든 <APP/> 컴포넌트의 실제 구현은 "import" 를 통해서 불러온 src 안의 App.js 파일
  - 개발을 할 때는 App.js라는 파일 안의 내용을 "Hello, REACT!!" 로 수정을 하게 된다면
  - create-react-app으로 구축한 환경에 의해서 파일을 수정할 때마다 자동으로 웹 브라우저를 reload 해줌
  - 이 때 반드시 리액트는 하나의 태그 안 쪽에 나머지 태그들이 있어야 함. 가장 바깥쪽에는 태그 하나가 있어야함
  - CSS 수정하기
  - import './App.css';
  - App.js 에 있는 위 코드는 app.js 안에 있는 react의 컴포넌트가 로드됐을 때 app.css도 로드
  - 즉, App 이라고 하는 컴포넌트의 디자인을 App안에 넣는 것
  - deploy 하기
  - create-react-app은  빌드할 때 "npm run build" 명령을 사용, 디렉토리 구조에 "build"라고 하는 파일이 추가
  - "build" 디렉토리 안에 있는 "index.html" 파일은 공백이 하나도 없는 상태
  - create-react-app이 실제 프로덕션 환경에서 사용되는 앱을 만들기 위해서 index.html 파일에서 공백과 같이 불필요하게 용량을 차지하는 정보를 제거했기 때문
  - 결론적으로 실제로 서비스할 때는 build안에 있는 파일들을 사용
  - Web Server가 문서를 찾는 최상위 디렉토리 "Document root" 에 build 디렉토리 안 쪽에 있는 파일들을 위치시킴
  - 이 과정을 통해 실서버환경이 완성
  - "serve" 라고 하는 npm을 통해 설치할 수 있는 간단한 웹서버가 있음
  - npx serve -s build 을 실행하면 serve라는 한번만 실행시킬 웹서버를 다운로드 받을 수 있음
  - "-s build" 옵션은 build라는 디렉토리를 document root로 하는 옵션
  - 명령어를 실행하여 생성된 웹 서버로 접속 할 수 있는 주소를 확인하고 접속하면 개발환경의 APP은 동작하는 모습은 똑같지만 전체용량이 확 줄어들었음을 확인가능
  - 실제로 코딩하기
  - 컴포넌트 
  - "public" 이라는 디렉토리는 create-react-app에서 "npm run start" 명령을 실행했을 때 파일을 찾는 "Document Root"
  - 시맨틱 태그는 웹 페이지는 대부분 header, navigation, 본문, footer 와 같은 부분을 의미론적으로 정의할 때 사용
  - 이 복잡한 태그들을 Subject와 같은 태그로 바꾸어 코드는 간단하지만 실제로 웹페이지에서는 같은 의미가 되게하는게 리액트
  - 정리정돈의 핵심은 서로 연관된 것들을 모아 이름을 붙이는 것. 이름을 붙여 사용자정의태그 만들기
  - 함수를 정의. 리액트에서 사용자정의태그(컴포넌트)를 만들때에는 반드시 대문자로 시작
  - 어떤 취지의 컴포넌트인지도 알기 쉽고, 컴포넌트를 사용하는 모든 곳을 한번에 수정가능.
  
## 3. state와 props
  - 리액트는 속성을 prop이라고 부름
  - 컴포넌트에 title="REACT" 속성을 써주고
  - ()안에 props를 써넣고 props를 보면 객체가 있고 title: "REACT"라 되어있음
  - 중괄호 안에 props.title을 넣기 (중괄호안은 문자열이 아니라 표현식으로 취급됨)
  - const topics : const는 topics의 값을 뒤에서 바꿀 수 없음
  - Nav태그 안에 topics="topics"로 하면 문자열이 전달됨, 중괄호로 감싸면 있는 그대로 전달

## 이벤트 (오픈튜토리얼스)
  - header 태그에 onChangeMode 속성으로 클릭하면 경고창이 뜨게끔하는 함수를 넣어주고
  - header 함수에 onClick에 event 객체를 파라미터로 줌, props.onChangeMode로 클릭하면 함수 작동하게끔 함.
  
## state
  - 리액트 컴포넌트에는 입력과 출력이 있는데 입력은 props
  - prop을 통해 입력된 데이터를 우리가 만든 컴포넌트 함수가 처리해서 return 값을 만들면 그 값이 새로운 ui가 됨
  - prop과 함께 컴포넌트 함수를 다시 실행해서 새로운 return값을 만들어주는 또 하나의 데이터, state
  - prop은 컴포넌트를 사용하는 외부자를 위한 데이터, state는 컴포넌트를 만드는 내부자를 위한 데이터
  - const [mode, setMode] = useState('WELCOME');
  - usestate는 배열을 가지고, 배열의 0번째 원소는 상태의 값을 읽을때 쓰는 데이터, 1번째 데이터는 상태의 값을 변경할때 사용하는 함수
  - usestate의 인자는 그 state의 초기값. state의 값은 0번째 인덱스의 값으로 읽음. state를 바꿀 때는 1번째 인덱스의 함수로 바꿈.
  - setMode 함수로 값을 바꿔주면 App 컴포넌트가 다시 실행되며 useState가 mode의 값을 READ로 새로 세팅
  - mode는 이름이 mode가 아니고 마음대로 해도됨
  - const [id, setId] = useState(null); 하고 반복문 코드 짜기
  - topics의 값은 숫자로 잘 바뀌는데 id 스테이트은 문자열 
  - id값이 만들어지는 과정 되짚기 : setId가 설정. setId는 Nav 컴포넌트에서 사용. setId의 _id는 Nav에서 옴.
  - 입력한 값이 숫자였지만 그것을 태그의 속성으로 넘기면 문자가 됨. (Nav 안에 id={t.id})>
  
## 생성 기능 구현
  - 어떤 정보를 서버로 전송할때 쓰는 html 태그 : form(https://www.opentutorials.org/course/2039/10944)
  - submit 버튼을 클릭했을 때 자바스크립트 코드가 실행되는 아주 좋은 타이밍은 폼 태그에 onsubmit이라는 prop을 제공하는 것.
  - onsubmit은 submit 버튼을 클릭했을 때 form태그에서 발생하는 이벤트.
  - form태그는 submit 했을 때 페이지가 리로드 되므로 prevent해주기
  - (https://seomal.com/map/1/55)
  - 상태를 만들 때 상태의 데이터가 원시데이터타입(7가지 정도)이면 그대로하면 됨
  - 하지만 범객체(객체, 배열)라면 처리방법이 달라짐
  - 데이터를 복제하고 : newValue = {...value}. 배열은 []
  - newValue를 변경하고
  - setValue(newValue) 하기
  - 리액트는 오리지널데이터와 새로들어온 데이터가 같은지 확인하고 같다면 굳이 컴포넌트를 다시 렌더링하지 않기 때문

## 수정 기능 구현
  - Create와 Read를 하이브리드해서 구현
  - props를 통해 흘러들어온 값을 Value에 주기. props는 바꿀 수 없으므로 state로 환승하기.
  - prop은 외부자가 내부로 전달하는 값. state는 내부자가 사용하는 값이므로 컴포넌트 안에서 얼마든지 바꿀 수 있다.
  - 리액트에서는 값을 입력할때마다 onchange가 호출됨
  - 입력될 때마다, 달라진 그 새로운 값을 state로 바꿔준다
  
## 삭제 기능 구현
  - 또하나의 li 태그를 묶어야 하는데 리액트에서는 태그를 다룰 때 하나의 태그 안에 들어있어야한다 (??)
  - 업데이트 링크와 함께 뜨도록 삭제버튼을 만들고 빈배열 만들어 id값이 일치하지 않는 토픽들만 푸시하고
  - state를 통해 토픽을 교체해준다
  - 만약 1을 삭제한다면 나머지의 id값이 그대로 2, 3인데 문제가 없나 하는 의문이 들었지만 문제는 없다.
  - i를 쓰는 코드에서 배열 순서나 개수가 아니라 id값을 결정적으로 다루기 때문. 굳이 복잡하게 바꿀 필요도 없음.
  - id값이 겹칠 일도 없다. 말그대로 고유한 값이다.


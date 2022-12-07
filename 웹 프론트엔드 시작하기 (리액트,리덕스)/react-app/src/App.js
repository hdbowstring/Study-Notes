import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
  return <header>
  <h1><a href="/" onClick={(event)=>{ //이벤트 객체를 첫번째 파라미터로 주입. 이벤트 상황을 제어할 수 있는 여러 정보와 기능이 들어있음
    event.preventDefault(); // a태그의 기본 동작을 방지
    props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
          event.preventDefault(); //a태그의 기본동작(리로드) 방지
          props.onChangeMode(Number(event.target.id)); // id값을 필요로하기에 a태그에 id={t.id}로 값을 부여. 
          // event.target: event를 유발시킨 태그를 가리킴(a태그), 여기의 id는 문자열이 됨. 숫자로 컨버팅해주는 number함수 써야됨
        }}>{t.title}</a>
        </li>)
  }
  return <nav>
    <ol>
     {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
      {props.body}
  </article>    
  }

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article> 
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article> 
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;

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

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{ // 이 정보를 create 컴포넌트의 사용자에게 공급해야함. 사용자는 onCreate를 통해 공급받음. onCreate는 prop임.
      event.preventDefault();
      const title = event.target.title.value; // event 함수 안에서, form태그에 소속된 name이 title이고 body인 태그의 value 값을 얻어내야함
      const body = event.target.body.value;
      props.onCreate(title, body); // 장작 넣어줌
    }}>
      <p><input type="text" name="title" placeholder="title"/></p> 
      <p><textarea name="body" placeholder="body" ></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>  
}  

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{ // 버튼을 누르면 생기는 일
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
        setTitle(event.target.value);
      }}/></p> 
      <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article> // props를 통해 흘러들어온 값을 Value에 주기. props는 바꿀 수 없으므로 state로 환승하기.
  // prop은 외부자가 내부로 전달하는 값. state는 내부자가 사용하는 값이므로 컴포넌트 안에서 얼마든지 바꿀 수 있다.
  //리액트에서는 값을 입력할때마다 onchange가 호출됨
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME'); // ()괄호 안은 상태의 기본값
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ])
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article> 
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){ //후자 id는 눌러진 항목의 id값(a태그에서 온), 전자는 토픽 배열 항목들에서 온 id값
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article> 
    contextControl = <>
      <li><a href={'/update/'+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');    
    }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []; // 빈 배열을 만든다
        for(let i=0; i<topics.length; i++){ // 순회하면서 
          if(topics[i].id !== id){
            newTopics.push(topics[i]); //id값이 일치하지 않는 토픽들만 푸시함 (일치하는 것만 삭제하는 셈)
          }
        }
        setTopics(newTopics); 
        setMode('WELCOME');
      }} /></li>
    </> // 복수의 태그를 그룹핑하는데만 사용하는 빈 태그 
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{ // 장작 받아옴
      const newTopic = {id:nextId, title:_title, body:_body}; //topics 변수에 새로운 원소(객체임)를 추가. 그러기 위해 topics를 상태로 승격시킴
      const newTopics = [...topics]; // 데이터를 복제함
      newTopics.push(newTopic); //복제본에 push해서 바꿈
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create> //별도의 컴포넌트를 만든다
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){ //후자 id는 눌러진 항목의 id값 (a태그에 있는)
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const newTopics = [...topics];
      const updatedTopic = {id:id, title:title, body:body} // 모드가 READ인 상태에서만 업데이트가 실행되기 때문에 id가 세팅되어있음
      for(let i=0; i<newTopics.length; i++){ //왜 반복문을 쓰는걸까
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break; //반복문 끄기
        }
      }
      setTopics(newTopics);
      setMode('READ')      
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{ //_id값을 받아옴
        setMode('READ');
        setId(_id); //_id는 state를 통해 id로 세팅되고 null이다가 Nav들을 누를때 세팅이됨
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(event)=>{
          event.preventDefault();
          setMode('CREATE');        
        }}>Create</a></li>
        {contextControl} 
      </ul>
    </div> 
  );
} 

export default App;

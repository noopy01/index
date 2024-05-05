import { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';  //TodoBoard
//  `**hint 1) 화면에 필요한 UI를 컴포넌트화 시켜보세요. 컴포넌트한 파일을 어떻게 화면에 불러올까요?**`

// `**hint 2) 내가 작성한 todos 데이터들을 어떻게 관리할까요?**`

// ```jsx
// const [todos, setTodos] = useState([
//   { id: 1, content: "Send E-mail", isDone: false },
//   { id: 2, content: "Make Work-Books", isDone: false },
//   { id: 3, content: "Sleeping", isDone: true },
//   { id: 4, content: "Watching You-Tube", isDone: true },
// ]);
// ```

// `**hint 3) 새롭게 작성된 todo 내용을 어떻게 todos에 추가할 수 있을까요?**`

// : useState의 이전 상태값과 spread operator에 대해 알아봅시다.

// `**hint 4) 새롭게 작성된 todo를 완료 처리 했을 때 어떻게 해낸 일에 추가할 수 있을까요?**` 

// : 완료를 누른 todo가 기존 todo 상태에 포함되어 있는 것이라면, todo의 완료 상태를 바꿔줄 수 있을 것입니다.

function App() {


  const [InputValue , setInputValue] = useState('') //변수명은 set만 추가해주기
  const [TodoList , setTodoList] = useState([])

  const addItem = () => { //익명함수
    
    setTodoList([...TodoList, InputValue]) //TodoList 배열 안에 InputValue값을 넣어주기
    var min = document.getElementById("min");
    min.value="";

  }

  return (
    <div className="container">

      <div className="title">UMC Study Plan</div>

      <div className="br"></div>

      <div className="inputWrapper">
          {/* onChange는 자판을 누를때마다 실행 setInputValue에 업데이트 해주기 자판하나하나 칠때마다 setInputValue에 들어가게됨*/}
          {/* setInputValue를 버튼을 누르면 그때에 값을 InputValue로 가져와 해야할일에 넣어주기  */}
          <input type="text" onChange={(event) => setInputValue(event.target.value)} id="min" className="input_value" placeholder="UMC 스터디 계획을 작성해보세요!"/>
          <button className='add_button' onClick={addItem}>추가</button>
      </div>
      
        <TodoBoard TodoList={TodoList}/>
      
    
    
    </div>
  );
}

export default App;




import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // state를 직접적으로 수정할 수 없음, 수정하는 함수를 이용 -> ex) toDos.push() 안됨  /  toDo = "" (x) , setToDo("") (o)
    setToDos((currentArray) => [toDo, ...currentArray]);
    // cost food = [1,2,3];
    // [6, ...food] -> [6, 1, 2, 3];    // 새로운array에 기존array의 element들을 넣는 방법

    setToDo("");
  };

  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          text="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {
        // ['a', 'b', 'c', 'd'].map((element) => element.toUpperCase()); 
        // -> 각 element에 대해 function을 실행하여 새로운 array를 return -> 그 function의 첫번째 argument는 각element, 두번째 arg는 인덱스
        toDos.map((item, index) => (
          <li key={index}>{item}</li> // react에서 map()을 사용하면 key를 줘야함
        ))}
      </ul>
    </div>
  );

}

export default App;
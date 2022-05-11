// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

// 리액트는 새로운 데이터가 들어올때마다 UI를 refresh함

function App() {
  const [counter, setValue] = useState(0); // create-react-app을 사용하니까 React.useState()라고 써줄필요 없음
  const [keyword, SetKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => SetKeyword(event.target.value);

  console.log("i run all the time"); // 두번씩 불러와지는건 <React.StrictMode>라서?
  // useEffect(function, [dependencies, ...]);
  // useEffect : 특정 코드들이 처음 컴포넌트가 render될 때만 실행되길 원하면(처음 한번만 -> 나중에 state가 변화해도 그 코드는 다시 실행X)
  // 어떤일이 일어나도 useEffect의 첫번째인자인 함수는 딱 한번만 실행
  // 무언가 변할때 특정 코드 실행 가능
  useEffect(() => {
    console.log("i run only once");
  }, []);  // 첫번째인자: 실행시키고싶은 코드(함수), 두번째인자: 해당 state 변화시 코드실행하게할 state(빈[]면 처음한번만 실행)
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]); // keyword가 변할때만 코드 실행 -> counter가 변할때는 실행 X
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter' and 'keyword' changes");
  }, [counter, keyword]);

  return (
    <div>
      {/* <h1 className={styles.title}>Welcome!</h1> */}
      {/* <Button text="Continue"/> */}
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

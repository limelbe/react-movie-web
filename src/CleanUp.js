import { useState, useEffect } from "react";

function Hello() {

  useEffect(() => {
    console.log('created :)');   // Hello컴포넌트가 처음 생성될때만 실행 -> Hello가 생겼다 없어졌다하니까 생길때마다 실행되는것
    return () => console.log('destroyed :(');   // Cleanup function : 컴포넌트가 destroy될때 코드 실행
  }, []);
  // // 위에 코드를 function으로 풀어쓰면 아래와 같은것
  // function ByeFn() {
  //   console.log('destroyed :(');
  // }
  // function hiFn() {
  //   console.log('created :)'); 
  //   return ByeFn;
  // }
  // useEffect(hiFn, []);

  return <h1>Hello</h1>;

}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      { // jsx에 자바스크립트 쓸때 중괄호
        showing ? <Hello /> : null  
        
      }      
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );

}

export default App;
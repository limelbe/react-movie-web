import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {

  // routes폴더 안에 있는 애들이 각 라우트(혹은 페이지, 스크린)들이고 걔네를 App.js에서 render 해야함
  // router는 URL을 보고있는 컴포넌트 -> URL에 따라 Home을 보여주거나 Detail을 보여주거나

  // react-router-dom 버전5 -> 버전6
  // 1. Switch컴포넌트가 Routes컴포넌트로 대체   Switch -> Routes
  // 2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당   <Route path="/" element={<Home />} />
  //    버전5는 <Router><Switch><Route path="/"><Home /></Route></Switch></Router>

  // Browser Router에서 URL은 보통의 웹사이트처럼 생김 -> http://localhost:3000/moive
  // HashRouter는 -> http://localhost:3000/#/moive

  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />  {/*  :param이름 -> url이 변수를 받을거라고 말해주는것 -> :id가 아니라 그냥 id 하면 변수값이 아니라 문자그대로 id가 되는것    */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />  {/* 원래 그냥 path="/"인데 github page업로드시 빈화면이 나오는 이슈 해결을 위해  path={`${process.env.PUBLIC_URL}/`}   */}
      </Routes>
    </Router>
  );
}

export default App;
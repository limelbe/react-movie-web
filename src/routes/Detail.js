import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);

  // 구글링결과 경고(React Hook useEffect has a missing dependency) 없애려면 아래처럼 쓰면됨
  // const getMovie = useCallback(async() => {
  //   const json = await (
  //   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json()
  //   setMovie(json.data.movie)
  //   setLoading(false)
  //   }, [id])
  //   useEffect(() => {
  //   getMovie()
  //   }, [getMovie])

  const getMovie = async() => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;

  // 각자 알아서 Detail 페이지도 커스텀하기

  // == github pages 업로드하기 ==
  // 1. npm i gh-pages 
  // 2. package.json에서 "scripts" 확인
  // 3. npm run build -> 그러면 bulid라는 폴더가 생김
  // 4. package.json 제일 마지막에 "homepage": "https://fineapple-sohi.github.io/reactpractice"를 추가
  // 5. package.json에서 "scripts" 에 "deploy": "gh-pages -d build", "predeploy": "npm run build"를 추가
  //    deploy는 우리가 방금 설치한 gh-pages를 실행시키고 build라는 디렉토리를 가져가는것
  //    먼저 build한 다음에 deploy하기 위해서 predeploy로 deploy하기전에 자동으로 먼저 실행할 동작을 설정해놓음
  // 6. npm run deploy


}

export default Detail;
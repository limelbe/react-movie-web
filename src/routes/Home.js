import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    // const json = await response.json();
    // 위에를 더 짧게하면 아래
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
    // 요즘엔 then 보다 보편적으로 async await 을 사용
    // fetch(
    //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    // )
    //   .then(response => response.json())
    //   .then(json => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
  }, []);

  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}  // key는 React에서만, map안에서 컴포넌트들을 render할때 사용하는 것 -> 그래서 아래처럼 컴포넌트로 안뺴고 쓸때는 div에 해준거고 컴포넌트로 뻇을떄 div말고 <Movie />의 prop으로 해줌
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres} 
            />
            // 컴포넌트로 빼줌 -> <Movie />
            // <div key={movie.id}>
            //   <img src={movie.medium_cover_image} />
            //   <h2>{movie.title}</h2>
            //   <p>{movie.summary}</p>
            //   <ul>
            //     {movie.genres.map((g) => (
            //       <li key={g}>{g}</li>
            //     ))}
            //   </ul>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
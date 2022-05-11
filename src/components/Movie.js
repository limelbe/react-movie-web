import PropTypes from "prop-types";
import { Link } from "react-router-dom";  // 브라우저 새로고침없이 유저를 다른페이지로 이동시켜주는 컴포넌트
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {  // Movie컴포넌트가 이 정보들({id, coverImg, title, summary, genres} -> object)을 부모컴포넌트로부터 받아온다
 return (
  <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie__img} />
    <div>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>
 ); 
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
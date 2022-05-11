import PropTypes from "prop-types";
import styles from "./Button.module.css"; // create-react-app은 css코드를 javascript Object로 변환시켜줌 -> style이 모듈러가 되는것?

function Button({text}) {
  return <button className={styles.btn}>{text}</button> // styles라는 object가 btn을 가지고 있는것
   // button에 무작위 class이름을 줌 -> 동일한 class이름(.btn)을 다른 파일내에서도 사용가능
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
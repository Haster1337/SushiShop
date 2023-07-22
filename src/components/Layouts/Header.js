import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import sushi from "./sushi.jpg";
import React from "react";
const Header = (props) => {

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi shop</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushi} alt='sushi'/>
      </div>
    </React.Fragment>
  );
};

export default Header;

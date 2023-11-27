import React from "react";
import styles from "../Button/Button.module.css";

export default function Button({ buttonName, onClick, type, className }) {
  return (
    <button onClick={onClick} className={styles.buttonStyle}>
      {buttonName}
    </button>
  );
}

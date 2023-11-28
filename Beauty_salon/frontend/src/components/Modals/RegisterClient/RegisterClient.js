import React from "react";
import { createPortal } from "react-dom";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import styles from "../RegisterClient/RegisterClient.module.css";

export default function RegisterClient({ open, onClose }) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.mainContainer}>
        <RegistrationForm onClose={onClose} />
      </div>
      <button onClick={onClose}>X</button>
    </div>,
    document.body
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import RegisterClientModal from "../Modals/RegisterClient/RegisterClient";
import styles from "../Home/Home.module.css";

export default function Home() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  function handleRegistrationButton() {
    setIsRegistrationModalOpen((prev) => !prev);
  }

  const navigate = useNavigate();

  return (
    <div className={styles.divContainer}>
      <Button
        onClick={(e) => navigate("/clients")}
        buttonName={"All Reservations"}
        className={styles.buttonStyle}
      />
      <Button
        onClick={handleRegistrationButton}
        buttonName={"Book an Appointment"}
        className={styles.buttonStyle}
      />
      <RegisterClientModal
        open={isRegistrationModalOpen}
        title={"RegistrationModal"}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
}

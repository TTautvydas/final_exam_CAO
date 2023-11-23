import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import RegisterClientModal from "../Modals/RegisterClient/RegisterClient";

export default function Home() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  function handleRegistrationButton() {
    setIsRegistrationModalOpen((prev) => !prev);
  }

  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={(e) => navigate("/Reservations")}
        buttonName={"All Reservations"}
      />
      <Button
        onClick={handleRegistrationButton}
        buttonName={"Book an Appointment"}
      />
      <RegisterClientModal
        open={isRegistrationModalOpen}
        title={"RegistrationModal"}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
}

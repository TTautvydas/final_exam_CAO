import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import RegisterClientModal from "../Modals/RegisterClient/RegisterClient";

export default function NavBar() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const navigate = useNavigate();

  function handleRegistrationButton() {
    setIsRegistrationModalOpen((prev) => !prev);
  }

  return (
    <div>
      <RegisterClientModal
        open={isRegistrationModalOpen}
        title={"RegistrationModal"}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
      <Button onClick={(e) => navigate("/")} buttonName={"Home"} />
      <Button onClick={handleRegistrationButton} buttonName={"Book"} />
    </div>
  );
}

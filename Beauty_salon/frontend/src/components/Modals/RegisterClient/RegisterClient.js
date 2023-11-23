import React from "react";
import { createPortal } from "react-dom";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";

export default function RegisterClient({ open, onClose }) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div>
      <div>
        <RegistrationForm />
      </div>
      <button onClick={onClose}>X</button>
    </div>,
    document.body
  );
}

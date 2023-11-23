import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={(e) => navigate("/")} buttonName={"Home"} />
      <Button onClick={() => {}} buttonName={"Book"} />
    </div>
  );
}

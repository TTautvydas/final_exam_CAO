import React from "react";

export default function Button({ buttonName, onClick, type }) {
  return <button onClick={onClick}>{buttonName}</button>;
}

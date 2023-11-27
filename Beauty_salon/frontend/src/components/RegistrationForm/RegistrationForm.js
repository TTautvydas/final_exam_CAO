import React, { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "../RegistrationForm/RegistrationForm.module.css";

const clientEndpoint = "http://localhost:3001/clients";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  async function createReservation(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(clientEndpoint, {
        name,
        email,
        date,
      });
      alert("Reservation added!");
      setName("");
      setEmail("");
      setDate("");
      navigate("/");
    } catch (error) {
      alert("Registration unsuccessful");
      console.log(error);
    }
  }

  return (
    <div className={styles.formStyle}>
      <form onSubmit={createReservation}>
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          type="text"
          id="name"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane Doe"
        />
        <br></br>
        <label htmlFor="email">Email address</label> <br></br>
        <input
          type="text"
          id="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. janedoe@gmail.com"
        />
        <br></br>
        <label htmlFor="date">Reservation Date</label>
        <br></br>
        <input
          type="datetime-local"
          value={date}
          required={true}
          onChange={(e) => setDate(e.target.value)}
        />
        <br></br>
        <Button type="submit" buttonName={"Save Appointment"} />
      </form>
    </div>
  );
}

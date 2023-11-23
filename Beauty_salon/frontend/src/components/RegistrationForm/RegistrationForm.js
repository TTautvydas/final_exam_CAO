import React, { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";

const clientEndpoint = "http://localhost:3001/clients";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

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
    } catch (error) {
      alert("Registration unsuccessful");
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={createReservation}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane Doe"
        />
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. janedoe@gmail.com"
        />
        <label htmlFor="date">Reservation Date</label>
        <input
          type="datetime-local"
          value={date}
          required={true}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button type="submit" buttonName={"Save Appointment"} />
      </form>
    </div>
  );
}

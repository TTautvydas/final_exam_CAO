import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "../UpdateClient/UpdateClient.module.css";

const clientEndpoint = "http://localhost:3001/clients";

export default function UpdateClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${clientEndpoint}/${id}`).then(({ data }) => {
      setName(data.clientName);
      setEmail(data.clientEmail);
      setDate(data.registrationDate.replace("Z", "").slice(0, 16));
    });
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await axios
      .put(`${clientEndpoint}/${id}`, {
        name,
        email,
        date,
      })
      .then(() => {
        alert("Updated successfully!");
        navigate("/clients");
      })
      .catch(() => alert("Update failed"));
  }

  return (
    <div className={styles.updateContainer}>
      <form onSubmit={handleUpdate}>
        <h2>Update reservation:</h2>
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          type="text"
          id="name"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="email">Email address</label>
        <br></br>
        <input
          type="text"
          id="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
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
        <Button buttonName={"Cancel"} onClick={() => navigate("/clients")} />
      </form>
    </div>
  );
}

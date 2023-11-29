import React from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import ClientReservation from "../ClientReservation/ClientReservation";
import styles from "../Reservations/Reservations.module.css";

const clientsEndpoint = "http://localhost:3001/clients";

export default function Reservations() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(clientsEndpoint)
      .then(({ data }) => setClients(data))
      .catch((error) => alert(error.message));
  }, []);

  const sortedClients = clients.sort(
    (a, b) => new Date(a.registrationDate) - new Date(b.registrationDate)
  );

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <main>
        <table className={styles.tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Reservation date</th>
            </tr>
          </thead>
          <tbody>
            {sortedClients.map((client) => {
              return (
                <ClientReservation
                  setClients={setClients}
                  client={client}
                  key={client._id}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

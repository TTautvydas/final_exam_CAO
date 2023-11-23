import React from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import ClientReservation from "../ClientReservation/ClientReservation";

const clientsEndpoint = "http://localhost:3001/clients";

export default function Reservations() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(clientsEndpoint)
      .then(({ data }) => setClients(data))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        {clients.map((client) => {
          return (
            <ClientReservation
              setClients={setClients}
              client={client}
              key={client._id}
            />
          );
        })}
      </main>
    </div>
  );
}

import axios from "axios";
import Button from "../Button/Button";

const clientsEndpoint = "http://localhost:3001/clients";

export default function ClientReservation({ client, setClients }) {
  function handleDelete() {
    axios
      .delete(`${clientsEndpoint}/${client._id}`)
      .then(() => {
        setClients((prev) => prev.filter((p) => p._id !== client._id));
      })
      .catch((error) => {
        console.log(error);
        alert("Deletion failed");
      });
    alert("Reservation successfully deleted");
  }

  return (
    <div>
      <h4>{client.clientName}</h4>
      <p>{client.clientEmail}</p>
      <p>{client.registrationDate}</p>
      <Button buttonName={"Update"} />
      <Button buttonName={"Delete"} onClick={handleDelete} />
    </div>
  );
}

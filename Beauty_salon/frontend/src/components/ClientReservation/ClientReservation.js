import axios from "axios";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "../ClientReservation/ClientReservation.module.css";

const clientsEndpoint = "http://localhost:3001/clients";

export default function ClientReservation({ client, setClients }) {
  const navigate = useNavigate();

  function handleDelete() {
    const confirmationText =
      "Are you sure you want to delete this reservation?";
    if (!window.confirm(confirmationText)) {
      return navigate("/clients");
    }
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

  function handleUpdate() {
    navigate(`/clients/${client._id}`);
  }

  return (
    <tr className={styles.rowStyle}>
      <td>{client.clientName}</td>
      <td>{client.clientEmail}</td>
      <td>
        {client.registrationDate
          .replace("T", " ")
          .replace("Z", "")
          .slice(0, 16)}
      </td>
      <td>
        <Button buttonName={"Update"} onClick={handleUpdate} />
      </td>
      <td>
        <Button buttonName={"Delete"} onClick={handleDelete} />
      </td>
    </tr>
  );
}

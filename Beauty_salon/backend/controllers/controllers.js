import Client from "../models/Client/Client.js";

let currentDateObj = new Date();
let currentDate = currentDateObj.toISOString().slice(0, 19);

export async function registerClient(req, res) {
  const { name, email, date } = req.body;

  if (date < currentDate) {
    return res.status(500).json({ message: "Date must be future date" });
  }

  if (!name || !email) {
    return res.status(500).json({ message: "All fields must be filled" });
  }

  try {
    const client = new Client({
      clientName: name,
      clientEmail: email,
      registrationDate: date,
    });

    await client.save();

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getClients(req, res) {
  try {
    const clients = await Client.find({}, { __v: 0 });

    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(500).json({ message: "Client registration not found" });
    }

    const client = await Client.findById(id);

    if (!client) {
      res.status(500).json({ message: "Client registration not found" });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const { name, email, date } = req.body;

  try {
    if (!id) {
      res.status(500).json({ message: "Client registration not found" });
    }

    if (date < currentDate) {
      return res.status(500).json({ message: "Date must be future date" });
    }

    if (!name || !email) {
      return res.status(500).json({ message: "All fields must be filled" });
    }

    const client = await Client.findById(id);

    if (!client) {
      return res.status(500).json({ message: "Client registration not found" });
    }

    client.clientName = name;
    client.clientEmail = email;
    client.registrationDate = date;

    await client.save();

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong on update" });
  }
}

export async function deleteClient(req, res) {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    if (!client) {
      res.status(500).json({ message: "Client registration not found" });
    }

    await Client.findByIdAndDelete(id);

    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong on delete" });
  }
}

export function fallBackRoute(req, res) {
  res.status(404).json({ error: "Page is not found" });
}

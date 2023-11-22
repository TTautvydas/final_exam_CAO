import express from "express";
import {
  deleteClient,
  getClients,
  registerClient,
  updateClient,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/clients", registerClient);

router.get("/clients", getClients);

router.put("/clients/:id", updateClient);

router.delete("/clients/:id", deleteClient);

export default router;

import express from "express";
import {
  deleteClient,
  fallBackRoute,
  getClientById,
  getClients,
  registerClient,
  updateClient,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/clients", registerClient);

router.get("/clients", getClients);

router.get("/clients/:id", getClientById);

router.put("/clients/:id", updateClient);

router.delete("/clients/:id", deleteClient);

router.get("*", fallBackRoute);

export default router;

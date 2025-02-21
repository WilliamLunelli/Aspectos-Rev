import express from "express";
import {
  createContactController,
  deleteContactController,
  getContactsController,
} from "../controller/contactController";

const router = express.Router();

router.post("/contato", createContactController);

router.get("/contatos", getContactsController);

router.delete("/contato", deleteContactController);

export default router;

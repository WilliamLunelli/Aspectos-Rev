import express from "express";
import {
  createContactController,
  deleteContactController,
  getContactsController,
} from "../controller/contactController";
import { privateRequest } from "../middlewares/auth";
import { localStrategyAuth } from "../libs/passport-local";
import { BearerStrategyAuth } from "../libs/passport-bearer";

const router = express.Router();

router.post("/contato", privateRequest, createContactController);

router.get("/contatos", getContactsController);

router.delete("/contato", privateRequest, deleteContactController);

router.post("/login", localStrategyAuth, async (req, res) => {
  res.json({
    user: req.user,
    auth: req.authInfo,
  });
});

router.get("/private", BearerStrategyAuth, async (req, res) => {
  res.json({ msg: "Acessou!" });
});

export default router;

import express from "express";
import {
  createContactController,
  deleteContactController,
  getContactsController,
} from "../controller/contactController";
import { privateRequest } from "../middlewares/auth";
import { localStrategyAuth } from "../libs/passport-local";
import { BearerStrategyAuth } from "../libs/passport-bearer";
import { jwtStrategyAuth } from "../libs/passport-jwt";
import multer from "multer";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
});

router.post("/contato", upload.single("Photo"), createContactController);

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

router.get("/privatejwt", jwtStrategyAuth, async (req, res) => {
  res.json({ msg: "Acessou JWT!" });
});

export default router;

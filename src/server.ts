import express from "express";
import helmet from "helmet";
import router from "./routes";
import passport from "passport";
import { localStrategy } from "./libs/passport-local";
import { StrategyBearer } from "./libs/passport-bearer";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

passport.use(localStrategy);
passport.use(StrategyBearer);
server.use(passport.initialize());

server.use("/", router);
server.get("/ping", (req, res) => {
  res.json({ ping: true });
});

server.listen(3000, () => {
  console.log("Servidor rodando: http://localhost:3000/");
});

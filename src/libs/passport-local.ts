import { Strategy as LocalStrategy } from "passport-local";
import { createUserToken, findUserByEmailAndPassword } from "../services/user";

export const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    console.log("email:", email);
    console.log("password:", password);

    const user = await findUserByEmailAndPassword(email, password);
    if (user) {
      const token = createUserToken(user);
      const response = {
        auth: {
          token,
        },
        user,
      };

      return done(null, response);
    } else {
      return done(null, false);
    }
  }
);

import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoutes.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

// SequelizeStore initialization
const SequelizeStoreSession = SequelizeStore(session.Store);
const sessionStore = new SequelizeStoreSession({
  db: db,
});

// Immediately invoked function to sync database models
(async () => {
    await db.sync({
            force: false,
        });
    console.log("Database terhubung");
})();

// Middleware setup
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// ----create db session
// store.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

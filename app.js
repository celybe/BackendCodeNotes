import express from "express";
import cors from "cors";
import usersRoutes from "./routes/user.js";
import preferencesRoutes from "./routes/preference.js";
import boardsRoutes from "./routes/board.js";
import eventsRoutes from "./routes/event.js";
import spacesRoutes from "./routes/space.js";
import authRoutes from "./routes/auth.js";
import docuemntRoutes from "./routes/auth.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Welcome Route
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Codenotes API",
  });
});

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/preferences", preferencesRoutes);
app.use("/api/boards", boardsRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/spaces", spacesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/documents", docuemntRoutes);

export default app;

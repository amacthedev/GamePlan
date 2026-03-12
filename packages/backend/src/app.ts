import express from "express";
import healthRoutes from "./routes/health.routes";
import userRoutes from "./routes/users.routes";


const app = express(); // express app

app.use(express.json()); // middleware that converts incoming JSON HTTP request into a useable object 
app.use("/api", healthRoutes); // mount api routes
app.use("/api/users", userRoutes); // mount user routes


export default app;

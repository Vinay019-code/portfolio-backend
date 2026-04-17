import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/DB.js";
// import contactRoutes from "./routes/contactRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

// Connect Data Base
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});0


// app.post("/api/contact", (req, res) => {
//   console.log(req.body);
//   const {name , email,message }=req.body;
//   res.json({ message: "Data received" });
// });


// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
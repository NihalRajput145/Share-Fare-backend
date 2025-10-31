const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rideRoutes = require("./routes/rides");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://nihalkumar7379_db_user:wuesCPO7Hwt6l0tF@sharefare.ofuuzcr.mongodb.net/?appName=ShareFare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/rides", rideRoutes);

// Server Start
const PORT = 5000;

// ✅ Listen on all network interfaces (important!)
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`)
);

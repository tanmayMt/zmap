import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config(); // Load environment variables


const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());   //This middleware parses incoming requests with JSON payloads, making the JSON data available in req.body.
app.use(express.urlencoded({ extended: true })); //This middleware parses incoming requests with URL-encoded payloads (like form submissions) and makes the data available in req.body.


const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));

//connnect mongodb
connectDb();

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome To the Server of CRUD APP using MERN </h1>");
});
app.get((req, res) => {
    res.status(400).send("<h1>page Not Foud</h1>");
});

app.use("/items", itemRoutes);


app.use((req, res) => {
    res.status(404).send("<h1>Route Not Found</h1>");
});


app.listen(PORT, () => {
    console.log(`🚀 Server is Running at http://localhost:${PORT}`);
});
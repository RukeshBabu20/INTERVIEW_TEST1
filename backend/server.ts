import express from "express";
import dbConnnection from "./database/database";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

dbConnnection();
app.use(express.json());
app.use(cors());

app.use("/employee", router);

app.listen(PORT, () => {
  console.log(`Server Running on port number: ${PORT}`);
});

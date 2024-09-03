import express from "express"
import bodyParser from "body-parser";
import router from "./routes/route.js";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    optionSuccessStatus: 200,
  })
);

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use("/", router)

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`)
})


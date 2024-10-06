import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import AdminRoute from "./routes/AdminRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(AdminRoute);

const port = 5000;
app.listen(5000, ()=> console.log(`Server up and running port ${port}`));
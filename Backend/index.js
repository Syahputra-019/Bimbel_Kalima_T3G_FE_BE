import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import KonsultanRoute from "./routes/KonsultanRoute.js";
import TransaksiRoute from "./routes/TransaksiRoute.js";
import VideoPembelajaranRoute from "./routes/VideoPembelajaranRoute.js";
import KonsultasiRoute from "./routes/KonsultasiRoute.js";
import BattleStudentRoute from "./routes/BattleStudentRoute.js";
import TryoutRoute from "./routes/TryoutRoute.js";
import ModulPembelajaranRoute from "./routes/ModulPembelajaranRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(AdminRoute);
app.use(KonsultanRoute);
app.use(TransaksiRoute);
app.use(VideoPembelajaranRoute);
app.use(KonsultasiRoute);
app.use(BattleStudentRoute);
app.use(TryoutRoute);
app.use(ModulPembelajaranRoute);

const port = 5000;
app.listen(5000, ()=> console.log(`Server up and running port ${port}`));
//packages import
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
//files import
import connectDB from "./config/db.js";
//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddelware from "./middelwares/errorMiddelware.js";

//dot env config
dotenv.config()

//mongodb connectiom
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

// validation middleware
app.use(errorMiddelware);

//port
const PORT = process.env.PORT || 2002

//listen
app.listen(PORT, () => {
        console.log(
            `Node Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgWhite.black
        );
    });
//packages import
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
//security packages
import helmet from "helmet";
import xss from 'xss-clean';
import mongoSanitize  from 'express-mongo-sanitize';
//files import
import connectDB from "./config/db.js";
//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddelware from "./middelwares/errorMiddelware.js";
import userRoutes from './routes/userRoutes.js';
import ExpressMongoSanitize from "express-mongo-sanitize";
import jobsRoutes from './routes/crisisRoutes.js';

//dot env config
dotenv.config()

//mongodb connectiom
connectDB();

//rest object
const app = express();

//middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/crisis',jobsRoutes);

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
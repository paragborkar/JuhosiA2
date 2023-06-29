import mysql from "mysql";
import express from 'express';
import userRoute from './routes/user.js';
import adminRoute from './routes/admin.js';
import cors from 'cors';
import dotenv from "dotenv";


dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",userRoute);
app.use("/api/v1",adminRoute);
export default app;

export const con = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `${process.env.DBUSER}`,
  password: `${process.env.DBPASS}`,
  database:`${process.env.DBNAME}`,
  port:`${process.env.DBPORT}`
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(process.env.PORT,()=>{
  console.log(`Server Is Listening On Port ${process.env.PORT}`);
})
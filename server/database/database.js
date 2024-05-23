import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({
  path: "config/.env",
});
var DB = mysql.createConnection({
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

DB.connect((err) => {
  if (!err) {
    console.log("\x1b[34;1m", "Database Connection Established Successfully");
  } else {
    console.log(
      "\x1b[31m",
      `Error connecting Database`,
      "\x1b[0m",
      err.message
    );
  }
});

export default DB;

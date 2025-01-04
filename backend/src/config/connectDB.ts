import mysql from "mysql2";
import { MYSQL_DATABASE, MYSQL_PSWD } from "./dotenv.config";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: MYSQL_PSWD,
  database: MYSQL_DATABASE,
  port: 3307,
});

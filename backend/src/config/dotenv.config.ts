import * as dotenv from "dotenv";

dotenv.config();

const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_PSWD = process.env.MYSQL_ROOT_PSWD;
const PORT = process.env.PORT;

export { MYSQL_DATABASE, PORT, MYSQL_PSWD };

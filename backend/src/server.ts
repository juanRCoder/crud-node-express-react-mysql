import express from 'express';
import cors from 'cors';
import { serverRoutes } from './server.routes';
import { connection } from './config/connectDB';
import { PORT } from './config/dotenv.config';

const app = express();

app.use(cors());
app.use(express.json());

app.use(serverRoutes);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
    return;
  }
  console.log("Connection established");

  app.listen(PORT || 3001, () => {
    console.log(`Server is running on port ${PORT || 3001}`);
  });
});
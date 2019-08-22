
import * as dotenv from "dotenv";
import App from './app';

dotenv.config();

const ENV = process.env.NODE_ENV;
const app = new App();

app.run();


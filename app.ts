import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register';
import auth from './routes/auth';
import dotenv from "dotenv";
import validartoken from "./routes/validar-token"
import pedidos from "./routes/pedidos";
dotenv.config();

const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/verificartoken', validartoken)
app.use('/pedir', pedidos)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

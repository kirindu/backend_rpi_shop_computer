import express from "express"; // ESM
import cors from "cors";
import dotenv from 'dotenv';
import colors from "colors";
import { db } from "./config/db.js";
import usersRoutes from './routes/usersRoutes.js'; // Cuando son archivos creados y no dependencias instyaladas debes colocarle .js al final
import shopsComputersRoutes from './routes/shopsComputersRoutes.js';

// Variables de Entorno
dotenv.config();

// Configurar la app
const app = express();

// Llamando a CORS
app.use(cors());


// Leer datos via Body
app.use(express.json());

// Conectar a DB
db();

// Definir rutas
app.use('/api/users',usersRoutes);
app.use('/api/shop',shopsComputersRoutes);


// Definir puerto
const PORT = process.env.PORT || 3000


// Arrancamos la app
app.listen(PORT, () => {
    console.log(colors.cyan('Server running on Port:'), colors.cyan.bold(PORT));
})
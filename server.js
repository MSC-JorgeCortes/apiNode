const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const librosRoutes = require('./routes/Libros');

const allowedOrigins = ['http://localhost' ];


app.use(cors({
    origin: (origin, callback)=> {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
           
        callback(null, true);
      } else {
        console.log("Dominio no permitido");
        callback(new Error("Este dominio no esta permitido"));
      }
    } 
  }));

app.use(express.json());
app.use('/api/libros', librosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express');
require('dotenv').config();

const app = express();
const librosRoutes = require('./routes/Libros');

app.use(express.json());
app.use('/api/libros', librosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

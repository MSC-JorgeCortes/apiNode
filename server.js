const express = require('express');
const app = express();
const sequelize = require('./db');
const librosRoutes = require('./routes/libros');

app.use(express.json());
app.use('/api/libros', librosRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});

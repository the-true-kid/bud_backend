const express = require('express');
const db = require('./models'); // Assuming Sequelize is set up in models/index.js
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors package

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Import and use your route files
const usersRouter = require('./routes/users');
const plantsRouter = require('./routes/plants');
const userPlantsRouter = require('./routes/userPlants');
const loginRoute = require('./routes/login');

app.use('/api/users', usersRouter);
app.use('/api/plants', plantsRouter);
app.use('/api/userPlants', userPlantsRouter);
app.use('/api/login', loginRoute);

// Start the server
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

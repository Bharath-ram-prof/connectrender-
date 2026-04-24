const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

app.get('/api/health', (req, res) => {
  res.json({
    status: "ok",
    message: "API is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
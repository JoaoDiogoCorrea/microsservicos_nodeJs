// server.js
const app = require('./app');

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Report Service running on port ${PORT}`);
});

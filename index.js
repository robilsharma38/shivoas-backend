const express = require('express')
const cors = require('cors');
const app = express();
const router = require('./routes/routes');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Parse JSON bodies
// Use the router
app.use('/v1', router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
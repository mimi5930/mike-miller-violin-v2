const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// app initialization
const app = express();
const PORT = process.env.PORT || 3001;

// app config
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));

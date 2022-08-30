const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

// app initialization
const app = express();
const PORT = process.env.PORT || 3001;

// app config
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

// serve up react static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));

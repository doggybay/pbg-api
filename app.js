const dotenv = require('dotenv');
const { app } = require('./server');

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.listen(process.env.PORT, () => console.log('Listening on port: ', process.env.PORT));

const dotenv = require('dotenv');
const { app } = require('./server');

dotenv.config();

app.listen(process.env.PORT, () => console.log('Listening on port: ', process.env.PORT));

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes')

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false}))

app.use("/", routes);

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
})

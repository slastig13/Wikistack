const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes')
const models = require('./models');
const PORT = 1337;
// const { db } = require('./models');

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }))

app.use("/", routes);

async function init() {
  await models.db.sync()

  app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`);
  })
}


init()





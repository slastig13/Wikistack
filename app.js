const express = require('express');
const morgan = require('morgan');
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');
const models = require('./models');
const PORT = 1337;
const views = require('./views/index.js');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }))

app.use("/wiki", wikiRoutes);
app.use("/user", userRoutes);

app.get('/', async (req, res, next) => {
  const allPages = await models.Page.findAll();
  res.send(views.main(allPages))
});


async function init() {
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`);
  })
}


init();





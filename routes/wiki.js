const express = require('express');
const router = express.Router();
const views = require('../views/index.js')
// const app = require()

router.get('/', (req, res, next) => {
  res.send(views.main(`INSERT PAGES HERE`));
})

router.post("/", (req, res) => {
  res.send('hiii');
});

router.get('/add', (req, res) => {
  res.send(views.addPage());
});

module.exports = router

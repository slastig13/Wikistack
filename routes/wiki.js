const express = require('express');
const router = express.Router();
const views = require('../views/index.js')
const { Page } = require("../models")
// const slugify = require("../slug")
// const app = require()

router.get('/', (req, res, next) => {
  res.send(views.main(`INSERT PAGES HERE`));
})

router.post("/", async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    // slug: slugify(req.body.title),
    content: req.body.content,
    status: req.body.status
  })

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error)
  }

});

router.get('/add', (req, res) => {
  res.send(views.addPage());
});

module.exports = router

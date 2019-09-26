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
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error)
  }

});

router.get('/add', (req, res) => {
  res.send(views.addPage());
});

router.get('/:slug', async (req, res, next) => {

  const foundPage = await Page.findOne({
    where: {slug: req.params.slug}
  });

  res.send(views.wikiPage(foundPage, 'Sam'));
})

module.exports = router

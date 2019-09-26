const express = require('express');
const router = express.Router();
const views = require('../views/index.js')
const { Page, User } = require("../models")
// const slugify = require("../slug")
// const app = require()

router.get('/', (req, res, next) => {
  res.send(views.main(`INSERT PAGES HERE`));
})

router.post("/", async (req, res, next) => {

  const name = req.body.author;

  let foundAuthor = await User.findOne({
    where: {name, email: req.body.email}
  });

  if (!foundAuthor) {
     foundAuthor = new User({
      name,
      email: req.body.email
    })
    await foundAuthor.save();
  }

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  })

  page.setAuthor(foundAuthor);

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

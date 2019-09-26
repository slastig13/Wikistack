const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',{
  logging: false
});

const User = db.define('users', {
  name: {type: Sequelize.STRING, allowNull: false},
  email: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      isEmail: true
    }
  }
})

const Page = db.define('pages', {
  title: {type: Sequelize.STRING, allowNull: false},
  slug: {type: Sequelize.STRING, allowNull: false},
  content: {type: Sequelize.TEXT, allowNull: false},
  status: Sequelize.ENUM('open','closed')
})

module.exports = {
  db, Page, User
}



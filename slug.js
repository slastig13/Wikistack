module.exports = function  (title) {
  let slug = "";

  slug = title.replace(/ /g,'_').replace(/\W/g,'')

  return slug
}



const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => {
  const pagesHTML = pages.map(p => {
    return html`<li><a href="/wiki/${p.slug}">${p.title}</a></li>`
  })
  console.log(pagesHTML)
  return layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      ${pagesHTML}
    </ul>
  </ul>`)};

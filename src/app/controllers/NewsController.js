class NewsController {
  // [GET] router /news
  index(req, res) {
    res.render("news");
  }
  // [GET] router /news/:slug
  show(req, res) {
    res.send("new details");
  }
}

module.exports = new NewsController();

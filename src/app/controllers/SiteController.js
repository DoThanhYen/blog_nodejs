class SiteController {
  // [GET] router /
  index(req, res) {
    res.render("home");
  }
  // [GET] router /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

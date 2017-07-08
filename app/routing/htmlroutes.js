// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/aboutUs", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/AboutUs.html"));
  });
  app.get("/podcasts", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/podcasts.html"));
  });
  app.get("/blogs", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/Blogs.html"));
  });
      app.get("/blogs/Oct-11-2016", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/Blog/Oct112016.html"));
  });
  // If no matching route is found default to home
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/home.html"));
  });

};
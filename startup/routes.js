const bodyParser = require("body-parser");
const pdf = require("../routes/pdf");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/pdf", pdf);
};

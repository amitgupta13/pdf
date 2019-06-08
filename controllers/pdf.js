const pdfFillForm = require("pdf-fill-form");
const path = require("path");
const pdf = path.join(process.cwd(), "test.pdf");

module.exports = function(req, res) {
  pdfFillForm
    .write(
      pdf,
      { test: req.body.test },
      { save: "pdf", cores: 4, scale: 0.2, antialias: true }
    )
    .then(
      function(result) {
        res.set({
          "Content-Type": "application/pdf"
        });
        res.send(result);
      },
      function(err) {
        console.log(err);
      }
    );
};

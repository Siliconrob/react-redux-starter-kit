var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", __dirname);
app.set("port", (process.env.PORT || 8000));

app.use(express.static(__dirname + "/../build"));
app.get("/", (req, res) => {
	res.render("index");
})

app.listen(app.get("port"), () => {
	console.log("Server ready - http://localhost:" + app.get("port"));
})
var express = require("express"),
    app     = express();
    
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("colorGame");
});

app.get("*", function(req, res){
	res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP);
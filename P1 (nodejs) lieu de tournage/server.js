var express = require("express");

var app = express();

app.use(express.static("public"));


app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function (request, response) {

    response.render("homePage");
});



app.get("/api/getarrondi", function (request, response) {

    const fs = require('fs');
    let rawdata = fs.readFileSync('./static/arrondissements.geojson');
    let arrondissements = JSON.parse(rawdata);
    response.status(200).json(arrondissements)

});
/* 
  ils manquent chercher return par arrondi par page 
 faire  pagenum=1&arrondi=13
*/



app.get("/api/getpoints", function (request, response) {
    console.log(request.query.pagenum);//pagenum
    const fs = require('fs');
    let rawdata = fs.readFileSync('./static/lieux-de-tournage-a-paris.geojson');
    let points = JSON.parse(rawdata);
    var pageEnCours = 1;

    if (request.query.pagenum != undefined && isInt(request.query.pagenum)) {
        pageEnCours = request.query.pagenum;

    }


    var numElementParPage = 100;
    points.features = points.features.slice((pageEnCours - 1) * numElementParPage, (pageEnCours * numElementParPage) - 1);
    response.status(200).json(points);



});
function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }



app.get("/test", function (request, response) {

    response.render("testPage");
});

app.get("/geo", function (request, response) {

    response.render("geo");
});
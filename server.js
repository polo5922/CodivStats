const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var unirest = require('unirest');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, response){
    response.render('index')
})

app.post('/', function (req, response) {
    var getStats = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");
    
    getStats.query({
        "country": "France"
    });
    getStats.headers({
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "4fef3857edmsh783687556d2dcb5p186862jsnae33ffb4cab1"
    });


    getStats.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body.data.covid19Stats[0]);
        let confimeds = res.body.data.covid19Stats[0].confirmed;
        let deaths = res.body.data.covid19Stats[0].deaths;
        let totalpopulation = 66990000;
        let recovereds = res.body.data.covid19Stats[0].recovered;
        response.render('index', { confirmed: confimeds,death: deaths,total: totalpopulation,recovered: recovereds})
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
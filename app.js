const {
    application
} = require("express");
const express = require("express");
const port = 3000;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render("index", {
        investment: "120,000",
        returns: "112,339",
        value: "232,339",
        up: "1000",
        uIn: "12",
        uy: "10"
    });
});

app.post("/", (req, res) => {

    let P = req.body.msip;
    let y = req.body.year
    let n = (req.body.year) * 12;
    let In = req.body.intrest;
    let i = (req.body.intrest / 100) / 12;

    let M = P * (((Math.pow(1 + i, n)) - 1) / i) * (1 + i);

    M = Math.floor(M);

    res.render("index", {
        investment: (P * n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        returns: (M - (P * n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        value: M.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        up: P,
        uIn: In,
        uy: y
    });

});



app.listen(port, () => console.log(`Server is running on port ${port}`));
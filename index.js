let express = require(`express`);
let app = express();
let port = 3002;

app.use(express.static(`public`));

app.set(`views`, `views`);
app.set(`view engine`, `hbs`);

app.listen(port, function() {
    console.log(`http://127.0.0.1:${port}`)
});

app.get(`/`, function(req,res) {
    res.render(`home`)
});

app.get(`/market`, function(req,res) {
    res.render(`market`)
});

app.get(`/currency`, function(req,res) {
    res.render(`currency`)
});

app.get(`/pack`, function(req,res) {
    res.render(`pack`)
});

app.get(`/account`, function(req,res) {
    res.render(`account`)
});

app.get(`/payment`, function(req,res) {
    res.render(`payment`)
});

app.get(`/settings`, function(req,res) {
    res.render(`settings`)
});

app.get(`/users`, function(req,res) {
    res.render(`users`)
});

app.get(`/signin`, function(req,res) {
    res.render(`signin`)
});

app.get(`/login`, function(req,res) {
    res.render(`login`)
});

app.get(`/rules`, function(req,res) {
    res.render(`rules`)
});

app.get(`/chat`, function(req,res) {
    res.render(`chat`)
});
const express = require('express');
const app = express();


const winners = [
    { name: "Andrea Dovizioso", country: "Italy", circuit: "Losail" },
    { name: "Cal Crutchlow", country: "England", circuit: "Autodromo" },
    { name: "Valentino Rossi", country: "Italy", circuit: "De Jerez" },
    { name: "Andrea Dovizioso", country: "Italy", circuit: "Mugello" }
    
];


app.get('/', (req, res) => {
    res.json(winners);
});


app.get('/country', (req, res) => {
    const countryData = groupByCountry();
    res.json(countryData);
});


app.get('/name', (req, res) => {
    const nameData = groupByName();
    res.json(nameData);
});


function groupByCountry() {
    const countryData = {};
    winners.forEach((winner) => {
        const country = winner.country;
        if (!countryData[country]) {
            countryData[country] = [];
        }
        countryData[country].push(winner);
    });
    return countryData;
}


function groupByName() {
    const nameData = {};
    winners.forEach((winner) => {
        const name = winner.name;
        if (!nameData[name]) {
            nameData[name] = [];
        }
        nameData[name].push(winner);
    });
    return nameData;
}


app.use((req, res) => {
    res.status(400).send("Bad Request");
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

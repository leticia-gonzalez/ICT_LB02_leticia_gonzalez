

/*
Aufgabe 1
a) Erstellen Sie ein Array mit 10 Einträgen von aktuellen Musikbands, der von diesem
Server aufgerufen werden kann.
b) Die URL muss http://localhost:3000/musicbands lauten
c) Aus der List von 1a soll per Zufall eine Musikband zurückgegeben werden (HTTP Response)
d) Fügen Sie die korrekten Headers ein, damit CORS Requests beantworten werden.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes



// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Content-Type', 'application/json');
    next();
});

//Source https://www.spotify.com/
//Array mit musicbands
const MusicbandList = ["Ac/DC","The Beatles",
    "Queen", "Led Zeppelin", "Guns N' Roses", "The Rolling Stones", "David Bowie",
    "Kiss", "Eagles", "The Kinks"];

//call url http://localhost:3000/musicbands
app.get('/musicbands', (req, res) => {
    const random = Math.floor(Math.random() * MusicbandList.length);
    res.send(JSON.stringify({puzzle: MusicbandList[random]}));
});


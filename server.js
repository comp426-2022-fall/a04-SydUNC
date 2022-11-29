import { roll } from "../a04-SydUNC/lib/roll.js"

import * as http from 'http';

import * as minimist from 'minimist';

import express from "express";

const argv = (process.argv.slice(2));

var app = express()

var port = 5000

var side = 6;
var die = 2;
var rolls = 1;

if (argv[0] != "") {
	var cleaned = argv[0].match(/\d/g);
	cleaned = cleaned.join("");
	parseInt(cleaned);
	port = cleaned;
}

app.get('/app/', (req, res) => {
	res.send('200 OK');
})
app.get('/app/roll/', (req, res) => {
	res.send(console.log(JSON.stringify(roll(side, die, rolls))));
})
app.get('/app/roll/:sides', (req, res) => {
	side = req.params['sides']
	res.send(console.log(JSON.stringify(roll(side, die, rolls))));
})
app.get('/app/roll/:sides/:dice', (req, res) => {
	side = req.params['sides']
	die = req.params['dice']
	res.send(console.log(JSON.stringify(roll(side, die, rolls))));
})
app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
	side = req.params['sides']
	die = req.params['dice']
	rolls = req.params['rolls']
	res.send(console.log(JSON.stringify(roll(side, die, rolls))));
})
app.use(express.urlencoded({extended:true}));
app.post('/app/roll/', (req, res) => {
	rolls = req.body.rolls;
	die = req.body.dice;
	side = req.body.sides;
	res.send(console.log(JSON.stringify(roll(side, die, rolls))));
})
app.use((req, res, next) => {
  res.status(404).send("404 Not Found!")
})

app.listen(port, () => {
})

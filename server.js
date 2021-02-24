const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const { ResumeToken } = require('mongodb');
const app = express();

var url = "mongodb://localhost:27017"
MongoClient.connect(url, {useUnifiedTopology: true})
.then(client => {
	console.log("Connected to MongoDB")
	const db = client.db('CRUD')
	const collection = db.collection('quotes')
	app.set('view engine', 'ejs')
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(express.static('public'))
	app.use(bodyParser.json())

	app.get('/', (req, res) => {
		db.collection('quotes').find().toArray()
			.then(results => {
				res.render('index.ejs', {quotes: results})
			})
			.catch(error => console.error(error))
	})

	app.post('/quotes', (req, res) => {
		collection.insertOne(req.body)
		.then(result => {
			res.redirect('/')
		})
		.catch(error => console.error(error))
	})

	app.put('/quotes', (req, res) => {
		db.collection('quotes').findOneAndUpdate(
			{name: 'mom'},
			{
			$set: {
				name: req.body.name,
				quote: req.body.quote,
			}
			},
			{
				upsert: true
			}
		)
		.then(result => {
			res.json('Success')
		})
		.catch(error => console.error(error))
	})

	app.delete('/quotes', (req, res) => {
		db.collection('quotes').deleteOne(
			{name: req.body.name}
		)
		.then(result => {
			if (result.deletedCount === 0) {
				return res.json('No quotes to delete')
			}
			else
				res.json(`Delete Replacer's quote`)
		})
		.catch(error => {
			console.error(error)
		})
	})

	app.listen(3000, () => {
		console.log('listening on 3000')
	})
	})
	.catch(error => console.error(error))
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

var url = "mongodb://localhost:27017"
MongoClient.connect(url, {useUnifiedTopology: true})
.then(client => {
	console.log("Connected to MongoDB")
	const db = client.db('CRUD')
	const collection = db.collection('quotes')
	app.set('view engine', 'ejs')
	app.use(bodyParser.urlencoded({extended: true}))

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

	app.listen(3000, () => {
		console.log('listening on 3000')
	})
	})
	.catch(error => console.error(error))

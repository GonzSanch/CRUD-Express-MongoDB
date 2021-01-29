# CRUD-Express-MongoDB
Try to build a simple CRUD with express for training purpose

## Steps
- Creates package.json to manage dependencies:
```shell
$ npm init
```

- Install express:
```shell
$ npm install express --save
```
- Code app listen and endpoint get with an index.html

- Add Nodemon to daemonize server
```shell
$ npm install nodemon --save-dev
```

- Add body-parser to get form data with middleware
```shell
$ npm install body-parser --save
 ```

- Add MongoDB framework
```shell
$ npm install mongodb --save
```

- Add EJS as template engine
```shell
$ npm install ejs --save
```

- Launch mongo and mongo-express:
```shell
$ docker run --name mongo -d -p 27017:27017 mongo
$ docker run --link mongo:mongo -p 8081:8081 mongo-express
```

- Finish CRUD front and back

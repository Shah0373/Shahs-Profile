const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3500, () => console.log('listening at 3500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('drawings.db');
database.loadDatabase();

// database.insert({name: 'Sheefamn', status: 'train'});
// database.insert({name: 'cat', status: 'alive'});

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});


app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});


// in order to not rerun every time we can install the following
// npm install -g nodemon
// tehn we can run it
// nodemon index.js

console.log('hello');

const x = 5;

console.log(x + 2);

// npm node package manager for it we need package.json its a config file 

// npm init command will walk us thorugh setting up the package .json
// entry point is where we want our packages to be installed 
// Licnse is MIT and this is the most permissive licence 


// now we want to install the express server we could edit the package.json but instead we could use the following command

// npm install express -- will create an entry in package.json and create a folder called node_modules where all the dependencies will be installed for expres 
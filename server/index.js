//When building a server with Node.js and Express.js, you need to do the following:
//1. Require Express - const express = require('express');
//2. Initialize an instance of express and save it to a variable - const app = express();
//3. Use middleware to invoke your JSON parser - app.use(express.json());
//4. Use app.listen to define where the server should listen for requests - 
//   app.listen(4444, () => console.log(`Server running on 4444`))

const express = require('express');
const app = express();

const npCtrl = require('./controllers/npListCtrl')

// default api
const defaultWebsite = '/api/parks';

app.use(express.json());

//endpoints
app.get(`${defaultWebsite}`, npCtrl.getNationalParkList);
app.post(`${defaultWebsite}`, npCtrl.addNationalPark);
// app.put(`${defaultWebsite}/:id`, npCtrl.dateVisited);
app.delete(`${defaultWebsite}/:id`, npCtrl.removeNationalPark);

app.listen(3050, () => console.log('Server is running on 3050'));
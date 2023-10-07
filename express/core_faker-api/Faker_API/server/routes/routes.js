const functions = require('../models/model')

module.exports = (app) => {
app.get('/api/users/new', (req, res) => {
    res.json(functions.createUser())
});

app.get('/api/users/company', (req, res) => {
    res.json([functions.createUser(), functions.createCompany()])
});

app.get('/api/companies/new', (req, res) => {
    res.json(functions.createCompany())
});

}
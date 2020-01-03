var express = require('express')
var app = express()
var port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// username and password in body
app.get('/', (req, res) => {
    res.send("get user");
})

//user id and account id in body
app.get('/account', (req, res) => {
    res.send('get account')
})

//credit card id and user id in body
app.get('/creditcard', (req,res) => {
    res.send('get credit card')
})

//need user id in body
app.get('/type', (req,res) => {
    res.send('get type')
})


//need user id in body
app.post('/addaccount', (req,res) => {
    res.send('post add account')
})

//need user id in body
app.post('/addcreditcard', (req,res) => {
    res.send('post add credit card')
})

//need user id in body
app.post('/addaccount', (req,res) => {
    res.send('post add account')
})

app.post('/adduser', (req,res) => {
    res.send('post add user')
})

//need user id in body
app.post('/addtype', (req,res) => {
    res.send('post add type')
})

//need user id and account id in body
app.post('/account', (req,res) => {
    res.send('post add transaction to account')
})

//need user id and account id in body
app.post('/creditcard', (req,res) => {
    res.send('post add transaction to credit card')
})

//need user id and account id
app.put('/account', (req, res) => {
    res.send('update account information')
})

// need user id and credit card id
app.put('/creditcard',(req, res) => {
    res.send('update credit card information')
})

// need account id in body
app.delete('/account', (req, res) => {
    res.send('delete account ')
})

app.delete('/creditcard',(req, res) => {
    res.send('delete credit card')
})
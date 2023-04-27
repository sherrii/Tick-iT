const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const userRouter = require('./routes/user.js')
const bodyParser = require('body-parser')
//connect to database
mongoose.connect('mongodb+srv://sherrylu710:ZKtMuXaJuaaMpX0K@cluster0.5thsbwt.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


 /* handle parsing request body */
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../../build')));
// serve index.html on the route '/'


app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(path.join(__dirname, './client/css/style.css')));
/**
 * define user route handlers
*/
app.use('/api/user',userRouter);


// Unknown route handler
app.use((req, res) => res.status(404).send('unknown route handler'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`Server listening port ${port}`));

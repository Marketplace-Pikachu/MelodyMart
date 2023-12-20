const express = require('express');
const cors = require('cors');
const app = express();
const {productRouter} = require('./routes/products');
require('./models/Model');
const {userRouter} = require('./routes/users');

const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:9000'
}));

app.use(express.json());

app.use('/products', productRouter);

app.use('/user', userRouter);

app.use((req, res) => res.sendStatus(404));

//global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

//starting server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
  
  module.exports = app;
const express = require('express');
const app = express();

const cors = require('cors');
const accountRouter = require('./routes/account');
//const accountRouter = require('./routes/account')(app);

app.use(cors());

app.listen(3100, () => console.log('index app listening on port 3100!'));

app.use('/api/account', accountRouter);
app.get('/', (req, res) => res.send('Hello World!'));

import express from 'express';
import ejs from 'ejs';
import webNavigationRouter from './routes/webNavigation.js'
import mathRouter from './routes/math.js'
import morgan from 'morgan'



const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use('/', webNavigationRouter);
app.use('/math', mathRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

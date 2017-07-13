import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import routes from './routes';
import bluebird from 'bluebird';

const app = express();

app.disable('x-powered-by');
app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

let port = process.env.PORT || config.port;

app.listen(port, () => {
  console.log('Example app is listening on port ' + port);
});


export default app;
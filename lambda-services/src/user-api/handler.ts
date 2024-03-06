import ServerlessHttp from "serverless-http";
const express = require('express');
const app = express();
const emailRouter = express.Router();

emailRouter.get('/', (req: any, res: any, next: any) => {
  return res.status(200).json({
    message: 'Hello from user root!',
  });
});

emailRouter.get('/path', (req: any, res: any, next: any) => {
  return res.status(200).json({
    message: 'Hello from user path!',
  });
});


app.use('/user', emailRouter);

app.use((req: any, res: any, next: any) => {
  return res.status(404).json({
    error: 'Not Found user api',
  });
});

module.exports.handler = ServerlessHttp(app);

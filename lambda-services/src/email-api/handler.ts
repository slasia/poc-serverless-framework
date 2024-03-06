import ServerlessHttp from "serverless-http";
const express = require('express');
const app = express();
const { sayHello } = require('/opt/layer/nodejs/common');
const emailRouter = express.Router();

emailRouter.get('/', (req: any, res: any, next: any) => {
  const message = sayHello('email');
  return res.status(200).json({
    message,
  });
});

emailRouter.get('/path', (req: any, res: any, next: any) => {
  return res.status(200).json({
    message: 'Hello from email path!',
  });
});


app.use('/email', emailRouter);

app.use((req: any, res: any, next: any) => {
  return res.status(404).json({
    error: 'Not Found email api',
  });
});

module.exports.handler = ServerlessHttp(app);

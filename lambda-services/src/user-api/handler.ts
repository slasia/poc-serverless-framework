import ServerlessHttp from 'serverless-http';
const express = require('express');
const app = express();
const userRouter = express.Router();

// import { DataSource } from 'typeorm';

//TODO: Move the database configuration to another file for reuse 
// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT, 10),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   entities: ['dist/entity/**/*.js'],
//   synchronize: false,
//   logging: false,
// });


// // Init connection using TypeORM
// AppDataSource.initialize().then(() => {
//   console.log('Data Source has been initialized!');
// }).catch((err) => {
//   console.error('Error during Data Source initialization:', err);
// });

// Without ORM 

// userRouter.get('/database', async (req: any, res: any, next: any) => {
//   const client = await pool.connect();
//   const res2 = await client.query('SELECT NOW();');
//   console.log(res2.rows);
//   return res.status(200).json({
//     message: JSON.stringify(res2.rows[0]),
//   });
// });

userRouter.get('/', (req: any, res: any, next: any) => {
  console.log(process.env.DB_USER);
  return res.status(200).json({
    message: 'Hello from user root!',
  });
});

userRouter.get('/path', (req: any, res: any, next: any) => {
  return res.status(200).json({
    message: 'Hello from user path!',
  });
});

app.use('/user', userRouter);

app.use((req: any, res: any, next: any) => {
  return res.status(404).json({
    error: 'Not Found user api',
  });
});

module.exports.handler = ServerlessHttp(app);

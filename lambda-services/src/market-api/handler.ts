import { APIGatewayProxyHandler } from 'aws-lambda';
const { Lambda } = require('aws-sdk');

const LAMBDA_API_VERSION = '2015-03-31';
const LOCAL_LAMBDA_ENDPOINT = 'http://localhost:3002';

const lambda = new Lambda({
  apiVersion: LAMBDA_API_VERSION,
  endpoint: process.env.IS_OFFLINE ? LOCAL_LAMBDA_ENDPOINT : undefined,
});


export const handler: APIGatewayProxyHandler = async (event) => {
  const authHeader = event.headers.Authorization || event.headers.authorization || '';
  const token = authHeader.split(' ')[1] || '';

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Token is required' }),
    };
  }

  const params = {
    FunctionName: process.env.DECODE_API_FUNCTION_NAME,
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({ token }),
  };

  try {
    const response = await lambda.invoke(params).promise();
    return {
      statusCode: 200,
      body: response.Payload,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error calling decode-api', error: error.message }),
    };
  }
};
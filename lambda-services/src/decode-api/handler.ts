import { APIGatewayProxyResult } from 'aws-lambda';
const jwt = require('jsonwebtoken');



export const handler = async (event: any): Promise<APIGatewayProxyResult> => {
  const token: string = event.token;
  if (!token) {
    console.error('Token is required');
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Token is required' }),
    };
  }

  try {
    const decoded = jwt.decode(token, { complete: true });
    return {
      statusCode: 200,
      body: JSON.stringify(decoded),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid token', error: error.message }),
    };
  }
};

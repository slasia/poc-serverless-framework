import { handler } from '../../base-api/handler';

import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';

describe('baseApi handler', () => {
  it('should return status code 200 and a welcome message', async () => {
    const event: APIGatewayProxyEvent = {
      body: null,
      headers: {},
      multiValueHeaders: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: 'base/',
      pathParameters: null,
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      stageVariables: null,
      requestContext: {} as any,
      resource: '',
    };
    const context: Context = {} as Context;
    const callback: Callback = (error, response) => {};
    const result = await handler(event, context, callback);
    if (result) {
      expect(result.statusCode).toBe(200);
      expect(result.body).toBe(JSON.stringify({ message: 'Hi from base api' }));
    }
  });
});

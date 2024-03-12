
# POC Serverless Framework

## Description
This is the README file for the "POC Serverless Framework" project, designed to demonstrate how to set up and run a Serverless environment for APIs using Node.js, Express, and the Serverless Framework.

## Prerequisites
Before starting, make sure you have Node.js installed on your machine. You can download and install it from [nodejs.org](https://nodejs.org/). Additionally, you will need an AWS account and your access credentials to deploy functions to AWS Lambda.

## Installation of Serverless

To install the Serverless Framework and configure your environment, follow these steps:

1. **Serverless Framework Installation**:
   Execute the following command in your terminal to install the Serverless Framework globally:
   ```bash
   npm install -g serverless
   ```

2. **AWS Credentials Configuration**:
   Set up your AWS credentials to allow Serverless to deploy resources in your account:
   ```bash
   serverless config credentials --provider aws --key <yourAccessKeyID> --secret <yourSecretAccessKey>
   ```
   Replace `<yourAccessKeyID>` and `<yourSecretAccessKey>` with your own AWS credentials.

## Running Serverless Offline

To run your services locally and test your lambda functions without deploying them, you can use Serverless Offline:

1. Install necessary dependencies by running:
   ```bash
   npm install
   ```

2. Start Serverless Offline with:
   ```bash
   npm start
   ```
   This will allow you to access your functions via `http://localhost:3000` by default.

## Using Postman to Test Endpoints

Once your service is running with Serverless Offline, you can use Postman to send requests to your endpoints:

1. Open Postman and create a new request.
2. Select the appropriate method (GET, POST, etc.) and use the local URL of your service. Example: `http://localhost:3000/user`.
3. Send the request and observe the response.

## Available Endpoints

This project includes the following example endpoints that you can test:

- `GET dev//user`
- `GET dev//user/path`
- `GET dev/email`
- `GET dev/email/path`

Please replace the path according to the endpoint you wish to test.

## Deployment

To deploy your functions to AWS Lambda, execute the following command:
```bash
serverless deploy
```

Follow the instructions and command output to see the URL of your deployed functions.
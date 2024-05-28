# Serverless GraphQL React App with AWS Amplify

This project demonstrates how to build and deploy a serverless GraphQL React application using AWS Amplify. This works with v6 of Amplify.

## Prerequisites

- Node.js installed
- AWS Account
- Amplify CLI installed (`npm install -g @aws-amplify/cli`)

## Getting Started

### 1. Create a New React Application

```bash
npx create-react-app my-app
cd my-app
```

### 2. Initialize Amplify

```bash
amplify init
```

Follow the prompts to configure the project.

### 3. Add GraphQL API

```bash
amplify add api
```

- Select GraphQL
- Provide the API name
- Choose the default authorization type
- Configure additional settings as needed

### 4. Generate GraphQL Schema

Edit `amplify/backend/api/<your_api_name>/schema.graphql` to define your GraphQL schema.

```graphql
type Todo @model {
  id: ID!
  name: String!
  description: String
}
```

### 5. Deploy the Backend

```bash
amplify push
```

### 6. Configure the React App

Install the necessary dependencies:

```bash
npm install aws-amplify @aws-amplify/ui-react
```

Update `src/index.js` to configure Amplify:

```javascript
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
```

### 7. Create the GraphQL Operations

Generate the GraphQL queries and mutations:

```bash
amplify codegen
```

### 8. Implement CRUD Operations

Update your React components to interact with the GraphQL API using AWS Amplify.

### 9. Deploy the React App

Add hosting to your project:

```bash
amplify add hosting
```

Deploy the application:

```bash
amplify publish
```

Credits: Refer to this for older versions of AWS Amplify -> [Mokkapps blog](https://mokkapps.de/blog/build-and-deploy-a-serverless-graphql-react-app-using-aws-amplify).

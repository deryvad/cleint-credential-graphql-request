# Client Credential GraphQL Request

Client Credential GraphQL Request is an npm module that simplifies the process of making authenticated GraphQL requests using client credentials. It provides a streamlined process for acquiring access token, caching the access token, and making authenticated GraphQL requests to a server.

## Installation

To install Client Credential GraphQL Request, use npm:

```
npm install client-credential-graphql-request
```

## Usage

Using Client Credential GraphQL Request is straightforward. First, create an instance of the `GraphClient` class and configure it with your server's credentials and GraphQL endpoint:

```javascript

const { GraphClient } = require('client-credential-graphql-request');

const client = new GraphClient({
    graphEndPoint: "<GraphQL Endpoint URL>",
    logInUrl: "<URL of the token endpoint>",
    clientId: "<Your application's Client ID>",
    clientSecret: "<Your application's Client Secret>",
    resource: "<Client ID of the resource you need access to>",
    scopes: ["<Array of scopes>"]
})

```

Once you've created a `GraphClient` instance, you can use it to make authenticated GraphQL requests:
```javascript
const query = `query {
  someGraphQLQuery {
    id
    name
  }
}`;

const variables = {
  someVariable: 'some value',
};

client.request(query, variables)
      .then(data => console.log(data))
      .catch(err => console.log(err))

```

## API
**new GraphClient(options)**
Creates a new instance of GraphClient with the specified options.


**options**: An object that contains the following properties:
- **graphEndPoint**: The GraphQL endpoint URL that you'll run the query from.
- **logInUrl**: The URL of the token endpoint.
- **clientId**: Your application's Client ID.
- **clientSecret**: Your application's Client Secret.
- **resource**: The Client ID of the resource you need access to.
- **scopes**: Optional. A string array of scopes that the resource will validate (if any).

**client.request(query, variables)**
Sends an authenticated GraphQL request to the server with the specified query and variables.

- **query**: The GraphQL query to send to the server.
- **variables**: An optional object containing the variables to include in the GraphQL request.

Returns a promise that resolves with the data returned by the server, or throws an error when it encounters one.

## Conclusion
Client Credential GraphQL Request is a powerful tool for developers who need to implement client credential authentication in their GraphQL requests. It simplifies the process of authentication and request-making, making it faster and easier to get up and running with secure, authenticated GraphQL requests.
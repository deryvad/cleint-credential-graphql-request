import { GraphQLClient, gql } from 'graphql-request';
import { getClientCredentialToken } from './auth.mjs';
import config from './config.mjs';

const start = async() => {
    //Get an ESO Client Credential token
    console.log("Generating token....\n")
    const token = await getClientCredentialToken();
    
    //Continue if token is aquired
    if(token) {
        console.log("Token aquired, sending GraphQL request....\n")
        const client = new GraphQLClient(config.graphEndpoint)

        //GraphQL query
        const query = gql`
            query Application($applicationid: Int!) {
                application(applicationid: $applicationid) {
                    applicationid
                    name
                    acronym
                }
            }
        `;

        //GraphQL variables
        const variables = {
            applicationid: 220059,
        }

        //Request headers to add auth token
        const requestHeaders = {
            authorization: `Bearer ${token}`,
        }

        //Send the request to get the data
        const data = await client.request(query, variables, requestHeaders)
        console.log(`---------Graph Endpoint Response---------\n`)
        console.log(data)
        console.log(`\n---------End Graph Endpoint Response---------\n`)
    }
}

start();
const { GraphQLClient, gql } = require('graphql-request');
const { getClientCredentialToken } = require('./auth.js');

class GraphClient {

    constructor(config) {
        this.config = config;
    }

    request =  async (
        query,
        variables = {}
    ) => {
        //Get an ESO Client Credential token
        try {
            const token = await getClientCredentialToken(this.config);
        
            //Continue if token is aquired
            if(token) {
                const client = new GraphQLClient(this.config.graphEndPoint)
        
                //Request headers to add auth token
                const requestHeaders = {
                    authorization: `Bearer ${token}`,
                }
        
                //Send the request to get the data
                return await client.request(query, variables, requestHeaders)

            } else {
                throw new Error('Unable to get token');
            }
        }
        catch(e) {
            throw new Error(e);
        }        
    }
}

module.exports = { GraphClient, gql }
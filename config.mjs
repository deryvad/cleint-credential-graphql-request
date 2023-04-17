import {config} from 'dotenv';
config();

export default {
    graphEndpoint: process.env.AIRVIEW_GRAPHQL_URL,
    logInUrl: process.env.LOGIN_URL,
    resource: process.env.AIRVIEW_CLIENT_ID,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}
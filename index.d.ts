


export type GraphClientConfig = {
    graphEndPoint: string
    logInUrl: string
    clientId: string
    clientSecret: string
    resource?: string
    scopes?: string[]
}

export declare class GraphClient {
    constructor(config: GraphClientConfig)
    /**
     * Authenticates using Client Credential flow and execute the graph query
     * 
     */
    request(query: string, variables: {[key: string]: string|number|boolean}): Promise<any>
}
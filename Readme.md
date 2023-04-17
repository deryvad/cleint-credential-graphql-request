# Consuming the AIRVIEW GraphQL API (Node JS)

### Clone the repository to your local machine.
&nbsp;
### Navigate to the cloned folder in your terminal and install the packages by running the command below:
```

npm install

```
&nbsp;
### Create a new file called **.env** and add the following environment variables.
```

LOGIN_URL = "<Azure AD Login URL>"
CLIENT_ID = "<Your application's ESO Client Id>"
CLIENT_SECRET = "<Your application's ESO Client Secret>"
AIRVIEW_CLIENT_ID = "<The airview service's ESO Client Id>"
AIRVIEW_GRAPHQL_URL = "https://airview.ciostage.accenture.com/graph"

```
### Refer to the [AIRVIEW](https://airview.accenture.com/api#introduction-item-1) documentation for the values.

&nbsp;
### Start the application by running the command below:
```

npm start

```

### If the request is successful, you should be able to see logs like these:
###  
```

Generating token....

Token aquired, sending GraphQL request....

---------Graph Endpoint Response---------

{
  application: { applicationid: 220059, name: 'AIRVIEW', acronym: 'AVW' }
}

---------End Graph Endpoint Response---------

```

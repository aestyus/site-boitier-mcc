/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const ddb = new DynamoDBClient({});

exports.handler = async (event, context) => {

    let date = new Date();

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'sub': {S: event.request.userAttributes.sub},
                'nom': {S: event.request.userAttributes.family_name},
                'prenom': {S: event.request.userAttributes.name},
                'email': {S: event.request.userAttributes.email},
                'telephone': {S: event.request.userAttributes.phone_number},
                'genre': {S: event.request.userAttributes.gender},
                'dateNaissance': {S: event.request.userAttributes.birthdate},
                'nombrePoints': {N: '0'},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.CLIENTSTABLE
        };

        const Client = new PutItemCommand(params)
        // Call DynamoDB
        try {
            await ddb.send(Client)
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};
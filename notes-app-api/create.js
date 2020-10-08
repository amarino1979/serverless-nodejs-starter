import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-libs";

export const main = handler(async (event, context) => {
    //Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        // 'Item' contains the attributes of the item to becreated
        // - 'userId': user identities are federated through the
        // Cognito Identity Pool, we will usethe identity id
        // as the user id of the authenticateduser
        // - 'noteId': a unique uuid
        // - 'content': parsed from request body
        // - 'attachment': parsed from request body
        // - 'createdAt': current Unix timestampItem:{userId:event.requestContext.identity.cognitoIdentityId,noteId:uuid.v1(),content:data.content,attachment:data.attachment,createdAt:Date.now()}};awaitdynamoDb.put(params);returnparams.Item;});async

        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    };

    await dynamoDb.put(params);

    return params.Item;
});

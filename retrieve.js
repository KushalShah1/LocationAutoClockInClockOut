const AWS= require('aws-sdk');
const docClient= new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})

exports.handler = (event, context, callback) => {
    //prevent timeout from waiting event loop
    context.callbackWaitsForEmptyEventLoop = false;
    
    let params={
        TableName:"cLoc",
        Key:{
            "PhoneNumber":event.queryStringParameters.phoneNumber
        }
    }


    docClient.get(params, function(err,data){
        if(err)
            callback(err,null);
        else
            callback(null,data);
    });
}


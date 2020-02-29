const AWS= require('aws-sdk');
const docClient= new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})

exports.handler = (event, context, callback) => {
    //prevent timeout from waiting event loop
    context.callbackWaitsForEmptyEventLoop = false;
    let pn=event.queryStringParameters.phoneNumber;
    
    let params={
        Item:{
            PhoneNumber:pn,
            Logs:[]
        },
        TableName:"cLoc"
    }


    docClient.put(params, function(err,data){
        if(err)
            callback(err,null);
        else
            callback(null,{
                "statusCode": 200,
                "headers": {
                    "my_header": "my_value"
                },
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            });
    });
}


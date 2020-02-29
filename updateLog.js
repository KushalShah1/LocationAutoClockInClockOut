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
        else{
            params={
                Item:{
                    PhoneNumber:event.queryStringParameters.phoneNumber,
                    Logs:data.Item.Logs
                },
                TableName:"cLoc"
            }
            let logs=[event.queryStringParameters.log];
            params.Item.Logs=logs.concat(params.Item.Logs);

            docClient.put(params,function(err,data1){
                if(err)
                    callback(err,null);
                else
                    callback(null,{
                        "statusCode": 200,
                        "headers": {
                            "my_header": "my_value"
                        },
                        "body": JSON.stringify(data1),
                        "isBase64Encoded": false
                    })
            })
        }
    });
}


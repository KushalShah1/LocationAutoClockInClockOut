var apigClientFactory = require('aws-api-gateway-client').default;
config = { invokeUrl: 'https://8g5hdggadh.execute-api.us-east-1.amazonaws.com' }
var apigClient = apigClientFactory.newClient(config);

var pathParams = {
};

var pathTemplate = '/prod'
var method = 'GET';
var additionalParams = {
};
var body = {
};
 
async function addUser(_phoneNumber) {
    additionalParams = {
        queryParams: {
            phoneNumber:_phoneNumber
        }
    }

    return await apigClient.invokeApi(pathParams, pathTemplate + '/logs', 'POST', additionalParams, body)
        .then(function (result) {
            return (result.data);
           
        }).catch(function (result) {
           
            return (result);
        });
}
async function checkIfUserExists(_phoneNumber) {
    additionalParams = {
        queryParams: {
            phoneNumber:_phoneNumber
        }
    }

    return await apigClient.invokeApi(pathParams, pathTemplate + '/logs', 'GET', additionalParams, body)
        .then(function (result) {
            if(JSON.stringify(result.data).length<=2){
                return false;
            }
            return true;
        }).catch(function (err) {
            return (err);
        });
}

async function getLogs(_phoneNumber) {
    additionalParams = {
        queryParams: {
            phoneNumber:_phoneNumber
        }
    }

    return await apigClient.invokeApi(pathParams, pathTemplate + '/logs', 'GET', additionalParams, body)
        .then(function (result) {
            return (result.data);
            
        }).catch(function (result) {
            
            return (result);
        });
}

async function updateLogs(_phoneNumber, logString) {
    additionalParams = {
        queryParams: {
            phoneNumber:_phoneNumber,
            log:logString
        }
    }

    return await apigClient.invokeApi(pathParams, pathTemplate + '/logs', 'PUT', additionalParams, body)
        .then(function (result) {
            return (result.data);
           
        }).catch(function (result) {
           
            return (result);
        });
}

module.exports = {
    addUser,
    getLogs,
    checkIfUserExists,
    updateLogs
}
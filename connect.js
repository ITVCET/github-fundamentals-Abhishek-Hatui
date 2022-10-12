const AWS = require('aws-sdk');
let awsConfig = {
    "region": "us-east-1",
    "endpoint": " http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAJDNCKLXFA7HBKUEA", 
    "secretAccessKey": "lLW7NxCgttReBkv3rZiaL9hkHRDVKjCTDsDJwuQ"
}
AWS.config.update(awsConfig);

let docClient = AWS.DynamoDB.DocumentClient();

const fetchOnebyKey = ()=>{
    var params ={
        TableName : 'users',
        Key:{
            "email_id" : "abhishek@gmail.com"
        }

    };

    docClient.get(params,(err,data)=>{
        if(err){
            console.log(JSON.stringify(err,null,2));
        }
        else{
            console.log(JSON.stringify(data,null,2));
        }
    });

}
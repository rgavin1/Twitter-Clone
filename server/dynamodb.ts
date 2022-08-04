const AWS = require('aws-sdk');
require('dotenv').config()

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamodbClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.AWS_TABLE_NAME

const getPosts = async () => {
    const params = { TableName: TABLE_NAME }
    return await dynamodbClient.scan(params).promise();
}

const getPostById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id }
    }
    return await dynamodbClient.get(params).promise();
}

const addOrUpdatePost = async (post) => {
    const params = {
        TableName: TABLE_NAME,
        Item: post
    }
    return await dynamodbClient.put(params).promise();
}

const deletePostById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { id }
    }
    return await dynamodbClient.delete(params).promise();
}

const twitterPostsServices = {
    getPosts,
    getPostById,
    addOrUpdatePost,
    deletePostById
}

export default twitterPostsServices;
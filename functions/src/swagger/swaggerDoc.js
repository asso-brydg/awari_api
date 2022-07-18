


const swaggerDocument={
        "swagger": "2.0",
        "info": {
          "version": "1.0.0",
          "title": "AWARI API",
          "description": "Application de gestion de tourisme ",
          "license": {
            "name": "AWARI",
            "url": ""
          }
        },
        "host": "localhost:3000",
        "basePath": "/",
        "tags": [
          {
            "name": "Users",
            "description": "API for users in the system"
          }
    
        ],
        "schemes": [
          "http",
          "https"
        ],
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "securityDefinitions": {
            "ApiKeyAuth":{
              "type": "apiKey",
              "in": "headers",
              "name": "authorization"
            }
        },
        "paths": {
          "/users": {
            "get": {
              "summary": "user list",
              "tags": [
                "Users"
              ],
              "description": "Login user in system",
              "parameters": [
                {
                  "name": "user",
                  "in": "body",
                  "description": "user list",
                  "schema": {
                    "$ref": "#/definitions/User"
                  }
                }
              ],
              "produces": [
                "application/json"
              ],
              "responses": {
                "200": {
                  "description": "Login Success",
                  "schema": {
                    "$ref": "#/definitions/User"
                  }
                },
                "401":{
                  "description": "Login details are not valid!!"
                },
                "404":{
                  "description": "Email is not registered!"
                },
                "500":{
                  "description": "User login failed!!"
                }
              }
            }
          }
        },
        "definitions": {
        }
}

module.exports ={swaggerDocument}
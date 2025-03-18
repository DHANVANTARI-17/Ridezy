# `/users/register` Endpoint Documentation

## Description

This endpoint is used to register a new user in the system. It requires user details such as name, email, and password to create a new account.

## Request

*   **Method:** POST
*   **Content-Type:** application/json

## Required Data

The request body should be a JSON object with the following fields:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

*   `fullname`: An object containing the user's first and last names.
    *   `firstname`: User's first name (string). Must be at least 3 characters long.
    *   `lastname`: User's last name (string). Must be at least 3 characters long.
*   `email`: User's email address (string). Must be a valid email format.
*   `password`: User's password (string). Must be at least 5 characters long.

## Response Status Codes

*   **201 Created:** Successfully created a new user account. The response body will contain a JWT token and user information.
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGQzMzQzNjQ4NzkzNzQ4NzQ4NzRiNmUiLCJpYXQiOjE2OTIwMDM3NzAsImV4cCI6MTY5MjAwNzM3MH0.L9J4YCwmcwVnjJWVFMapJ07vM93m9_R9qWj8_z4-V44",
        "user": {
            "_id": "64d334364879374874874b6e",
            "firstname": "test",
            "lastname": "test",
            "email": "test@example.com",
            "createdAt": "2023-08-15T14:49:26.721Z",
            "updatedAt": "2023-08-15T14:49:26.721Z",
            "__v": 0
        }
    }
    ```
*   **400 Bad Request:** The request body is invalid, or required fields are missing. The response body will contain details about the validation errors.
    ```json
    {
        "errors": [
            {
                "location": "body",
                "msg": "Invalid value",
                "path": "fullname.firstname",
                "type": "field",
                "value": ""
            }
        ]
    }
    ```
*   **500 Internal Server Error:** An unexpected error occurred on the server.

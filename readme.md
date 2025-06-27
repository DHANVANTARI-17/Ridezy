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

# `/users/login` Endpoint Documentation

## Description

This endpoint is used to log in an existing user. It requires the user's email and password to authenticate and provide a JWT token for subsequent authenticated requests.

## Request

*   **Method:** POST
*   **Content-Type:** application/json

## Required Data

The request body should be a JSON object with the following fields:

```json
{
  "email": "string",
  "password": "string"
}
```

*   `email`: User's email address (string). Must be a valid email format.
*   `password`: User's password (string). Must be at least 5 characters long.

## Response Status Codes

*   **200 OK:** Successfully authenticated the user. The response body will contain a JWT token and user information.
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
                "path": "email",
                "type": "field",
                "value": "invalid-email"
            }
        ]
    }
    ```
*   **401 Unauthorized:**  Occurs when the email and password do not match any existing user in the database
    ```json
    {
        "message": "Invalid Credentials"
    }
    ```
*   **500 Internal Server Error:** An unexpected error occurred on the server.

# `/users/profile` Endpoint Documentation

## Description

This endpoint is used to retrieve the profile information of the currently authenticated user.

## Request

*   **Method:** GET
*   **Authorization:** Bearer token (JWT)

## Response Status Codes

*   **200 OK:** Successfully retrieved the user's profile information.
    ```json
    {
        "_id": "64d334364879374874874b6e",
        "firstname": "test",
        "lastname": "test",
        "email": "test@example.com",
        "createdAt": "2023-08-15T14:49:26.721Z",
        "updatedAt": "2023-08-15T14:49:26.721Z"
    }
    ```
*   **401 Unauthorized:** The user is not authenticated or the token is invalid.
    ```json
    {
        "message": "Unauthorized"
    }
    ```
*   **500 Internal Server Error:** An unexpected error occurred on the server.

# `/users/logout` Endpoint Documentation

## Description

This endpoint is used to log out the currently authenticated user by invalidating their session.

## Request

*   **Method:** GET
*   **Authorization:** Bearer token (JWT)

## Response Status Codes

*   **200 OK:** Successfully logged out the user.
    ```json
    {
        "message": "Successfully logged out"
    }
    ```
*   **401 Unauthorized:** The user is not authenticated or the token is invalid.
    ```json
    {
        "message": "Unauthorized"
    }
    ```
*   **500 Internal Server Error:** An unexpected error occurred on the server.

# `/captains/register` Endpoint Documentation

## Description

This endpoint is used to register a new captain in the system. It requires captain details such as name, email, password, and vehicle information.

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
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string",
    "location": {
      "latitude": "number",
      "longitude": "number"
    }
  }
}
```

*   `fullname`: An object containing the captain's first and last names.
    *   `firstname`: Captain's first name (string). Must be at least 3 characters long.
    *   `lastname`: Captain's last name (string). Must be at least 3 characters long.
*   `email`: Captain's email address (string). Must be a valid email format.
*   `password`: Captain's password (string). Must be at least 5 characters long.
*   `vehicle`: An object containing the captain's vehicle details.
    *   `color`: Vehicle color (string). Must be at least 3 characters long.
    *   `plate`: Vehicle plate number (string). Must be at least 3 characters long.
    *   `capacity`: Vehicle capacity (number).
    *   `vehicleType`: Type of vehicle (string). Must be one of the following: `car`, `bike`, `auto`.
    *   `location`: An object containing the vehicle's location.
        *   `latitude`: Latitude (number).
        *   `longitude`: Longitude (number).

## Response Status Codes

*   **201 Created:** Successfully created a new captain account. The response body will contain a JWT token and captain information.
    ```json
    {
        "token": "string",
        "captain": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string",
                "location": {
                    "latitude": "number",
                    "longitude": "number"
                }
            }
        }
    }
    ```
*   **400 Bad Request:** The request body is invalid, or required fields are missing.
*   **500 Internal Server Error:** An unexpected error occurred on the server.

# `/captains/login` Endpoint Documentation

## Description

This endpoint is used to log in an existing captain. It requires the captain's email and password to authenticate and provide a JWT token for subsequent authenticated requests.

## Request

*   **Method:** POST
*   **Content-Type:** application/json

## Required Data

The request body should be a JSON object with the following fields:

```json
{
  "email": "string",
  "password": "string"
}
```

*   `email`: Captain's email address (string). Must be a valid email format.
*   `password`: Captain's password (string). Must be at least 5 characters long.

## Response Status Codes

*   **200 OK:** Successfully authenticated the captain. The response body will contain a JWT token and captain information.
    ```json
    {
        "token": "string",
        "captain": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string",
                "location": {
                    "latitude": "number",
                    "longitude": "number"
                }
            }
        }
    }
    ```
*   **400 Bad Request:** The request body is invalid, or required fields are missing.
*   **401 Unauthorized:** Invalid email or password.
*   **500 Internal Server Error:** An unexpected error occurred on the server.

# `/captains/profile` Endpoint Documentation

## Description

This endpoint is used to retrieve the profile information of the currently authenticated captain.

## Request

*   **Method:** GET
*   **Authorization:** Bearer token (JWT)

## Response Status Codes

*   **200 OK:** Successfully retrieved the captain's profile information.
    ```json
    {
        "captain": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string",
                "location": {
                    "latitude": "number",
                    "longitude": "number"
                }
            }
        }
    }
    ```
*   **401 Unauthorized:** The captain is not authenticated or the token is invalid.
*   **404 Not Found:** The captain does not exist.
*   **500 Internal Server Error:** An unexpected error occurred on the server.

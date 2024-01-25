# NASA APOD TypeScript Express.js Application

This Node.js application uses TypeScript and Express.js to interact with NASA's Astronomy Picture of the Day (APOD) API. It fetches the APOD data, stores it in a PostgreSQL database using Sequelize ORM, and provides an API endpoint to retrieve the stored data.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Error Handling](#error-handling)
- [License](#license)

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aswiamp/nasarepo.git
2. Navigate to the project directory:
   ```bash
   cd NASA-APOD-TYPESCRIPT-EXPRESS
3. Install dependencies:
    ```bash
    npm install
## Configuration
1. Set up a PostgreSQL database and obtain connection details.

2. Create a `.env` file in the project root and configure the following
variables:

   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_DIALECT=postgres
   NASA_API_KEY=your_nasa_api_key
   
## Usage

  Run the application using:
  npm start
  Visit `http://localhost:3000` in your browser to test the API.

## API Endpoint

`GET /apod`
Fetches and stores the Astronomy Picture of the Day data. Returns the APOD data in the response.

Example Request:
http://localhost:3000/api/v1/apod

## Error Handling

The application handles errors from the NASA API and the database. Different HTTP responses are provided for various error scenarios.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

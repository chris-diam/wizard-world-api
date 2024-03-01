# Wizard World Node.js Server

This is a simple Node.js server that serves as a REST API to provide data about wizarding houses.

## Getting Started

To run this server locally, follow these steps:

1. Clone the repository.

```bash
   git clone git@github.com:chris-diam/wizard-world-api.git
   ```
2. Navigate to the project directory.

```bash
   cd wizard-world-api
   ```
 
3. Install dependencies.

```bash
  npm install
   ```

4. Run the server.

```bash
   node server.js
   ```

## API Endpoints

### Get all houses

- Endpoint: /houses
- Method: GET
- Description: Retrieves data about all wizarding houses.

### Get house by name

- Endpoint: /houses?name=`<house-name>`
- Method: GET
- Description: Retrieves data about a specific wizarding house by its name. Replace `<house-name>` with the name of the house you want to retrieve.

## Sample Data

The server responds with JSON data containing information about wizarding houses.

## Usage

You can use this server to fetch data about wizarding houses in your applications.



## License

This project is licensed under the MIT License.

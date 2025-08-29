# REST API Project

This project is a Node.js REST API built with Express. It provides endpoints for managing resources and demonstrates best practices for API development.

## Features

- CRUD operations for resources
- JSON request/response format
- Error handling
- Modular route structure

## Technologies Used

- Node.js
- Express
- SQLite with Prisma

## Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
git clone https://github.com/AmiChanDev/rest-api-project.git
cd rest-api-project
npm install
```

### Running the API

```bash
npm start
```

The API will run on `http://localhost:5000` by default.

## API Endpoints

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | /resources     | List all resources    |
| POST   | /resources     | Create a new resource |
| GET    | /resources/:id | Get a resource by ID  |
| PUT    | /resources/:id | Update a resource     |
| DELETE | /resources/:id | Delete a resource     |
| GET    | /test          | Test the API          |

resources:
_(users)_
_(city)_

## Project Structure

```
rest-api-project/
├──src
|    ├── routes/
|    ├── controllers/
|    ├── models/
├── server.ts
└── package.json
```

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

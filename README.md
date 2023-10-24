# Node.js TypeScript API with Docker

This is a sample project demonstrating a simple setup to build an API using Node.js, TypeScript, and Docker.

## Prerequisites

Ensure that you have Node.js (v18.13.0), Yarn (v1.22.19), and Docker (24.0.6) or higher installed on your machine.

### Node.js (v18.13.0) [Download](https://nodejs.org/en/download/)
### Yarn (v1.22.19) [Download](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
### Docker (v24.0.6) [Download](https://docs.docker.com/get-docker/)


## Project Setup

1. Clone the repository.

```bash
   git clone https://github.com/andre-ols/setup-node-typescript.git
   cd setup-node-typescript
```

2. Install the dependencies.

```bash
   yarn install
```

## Running the Application
### Run in Development Mode

```bash
   yarn start:dev
```
This will start the Node.js server using TypeScript and Nodemon for automatic restarts during development.

### Run in Production Mode

```bash
   yarn start:prod
```
This will start the Node.js server using the compiled JavaScript code.

### Run with Docker in Development Mode

```bash
   yarn start:docker:dev
```

This will start the Node.js server using Docker and Nodemon for automatic restarts during development.

### Run with Docker in Production Mode
```bash
   yarn start:docker:prod
```
This will start the Node.js server using Docker and the compiled JavaScript code.

## Endpoints
### GET /
Returns: `Hello World!`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


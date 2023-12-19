# MERN Stack Application

This repository contains a fullstack web application split into two main folders: `frontend` and `backend`. It is using `Node.JS`, `Express.JS` and `MySQL` at backend with `sequelize` as ORM. For frontend, `React`, `Vite` and `Tailwind` is used.

## Backend Setup

### Prerequisites

- Node.js and npm installed

### Installation

1. Navigate to the `backend` folder: `cd backend`
2. Install dependencies: `npm install`

### Environment Setup

Create a `.env` file in the `backend` directory with the following configuration:

`NODE_ENV=development
DB_CONNECTION_STRING=mysql://wo7hski0sg1mymrh:bmxy8y9ip0v4cq5u@yjo6uubt3u5c16az.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hwsmyezvr62s76yi`

### Running the Backend Server

Run the following command to start the backend server:
`npm run dev`

### Postman Collection

A Postman collection file (`collection.json`) is available in the `backend` folder to access the APIs.

## Frontend Setup

### Prerequisites

- Node.js and npm installed

### Installation

1. Navigate to the `frontend` folder: `cd frontend`
2. Install dependencies: `npm install`

### Running the Frontend Application

Run the following command to start the frontend application:

`npm run dev`

The frontend will be accessible at `http://localhost:5173` by default.

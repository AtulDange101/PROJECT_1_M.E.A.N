# JustDial Admin Portal API

The **JustDial Admin Portal API** is a backend service built with **Node.js** and **Express.js** to manage restaurant data for the JustDial platform. It provides a RESTful API to perform CRUD operations (Create, Read, Update, Delete) on restaurant records stored in a **MongoDB** database. 

https://github.com/user-attachments/assets/c10c8af5-6e4c-4732-a949-d7b51cc9ccd6

### Features:
- **Create**: Add new restaurant entries.
- **Read**: Retrieve a list of all restaurants.
- **Update**: Modify existing restaurant data.
- **Delete**: Remove restaurants from the database.

### Technologies:
- **Node.js** & **Express.js** for the server-side application.
- **MongoDB** for data storage.
- **CORS** enabled for frontend integration (on `http://localhost:4200`).

### Endpoints:
- `GET /READ`: Fetch all restaurants.
- `POST /CREATE`: Add a new restaurant.
- `PUT /UPDATE/:Id`: Update a restaurant by ID.
- `DELETE /DELETE/:Id`: Delete a restaurant by ID.

### Setup:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start MongoDB and the server with `node app.js`.

For detailed usage, refer to the API documentation.

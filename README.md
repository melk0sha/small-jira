# Small Jira

---

## OVERVIEW

This is a service that resembles Jira.

### Models of data used here:

- **User** (with attributes):
  ```javascript
  { id, name, login, password }
  ```
- **Board** (set of columns):
  ```javascript
  { id, title, columns }
  ```
- **Column** (set of tasks):
  ```javascript
  { id, title, order }
  ```
- **Task**:
  ```javascript
  { id, title, order, description, userId /* assignee */, boardId, columnId }
  ```

### Details about Data and Routes:

1. For `User`, `Board` and `Task` created REST endpoints by separate router paths:

   - `/users`
     - `GET /users` - get all users (removed password from response)
     - `GET /users/:id` - get the user by id (ex. “/users/123”) (removed password from response)
     - `POST /users` - create user
     - `PUT /users/:id` - update user
     - `DELETE /users/:id` - delete user
   - `/boards`
     - GET all
     - GET by id
     - POST
     - PUT
     - DELETE
   - `/tasks`
     - GET all by boardId
     - GET by id
     - POST
     - PUT
     - DELETE

2. When you DELETE `Board`, all its `Tasks` will be deleted as well.

3. When you DELETE `User`, all `Tasks` where User is assignee updated to *userId = null*.

### About Logging & Error Handling

1. There is a middleware which logs *incoming requests* to service.
2. There is a middleware which logs *all unhandled errors* and return a standard message with HTTP code 500 (Internal Server Error).
3. There is an errors handling to *uncaughtException*.
4. There is a *unhandledRejection* listener to log errors.

### About Database

MongoDB is used as a service database.  
Mongoose ODM is used to store and update data.

---

## HOW TO INSTALL

1. Clone this repository to your local machine.
2. Go to folder.
3. Run `npm install`.

---

## USAGE EXAMPLE

1. Run `npm start` in the first terminal - you will start the server.
2. Run `npm test` in the second terminal - you will see completed tests.
3. Open `http://localhost:4000/doc/` to see Swagger UI.

---

## TOOLS USING

**[Node.js](https://nodejs.org/en/)**, **JavaScript**, **[Express.js](https://expressjs.com/ru/)**, **[MongoDB](https://www.mongodb.com/)**, **[Mongoose ODM](https://mongoosejs.com/)**, **[Swagger](https://swagger.io/)** and **[uuid](https://www.npmjs.com/package/uuid)** were used here.

---

### DEVELOPMENT

@ 2020 Diana Ivanova (@melk0sha)

# Express Middleware Assignment – Todo CRUD

## Overview

This project is a Todo CRUD application built using Express.js to demonstrate the use of middleware at different levels: app-level, route-level, and route-specific middleware.

Todos are stored in a `db.json` file to ensure data persistence even after server restarts.

---

## Server Setup

An Express server is created and runs on port 3000.
When the server starts, it logs:

Server is running on [http://localhost:3000](http://localhost:3000)

The `express.json()` middleware is used to parse incoming JSON requests.

---

## App-Level Middleware (Logger)

A logging middleware is applied using `app.use()`.

### Functionality:

* Logs HTTP method
* Logs request URL
* Logs timestamp

### Example Log:

[2026-01-13 20:15:12] GET /todos

This middleware runs for **every incoming request**.

---

## Route-Level Middleware (Rate Limiter)

A rate limiting middleware is applied **only to GET /todos**.

### Rules:

* Maximum 15 requests per minute per IP
* If exceeded, responds with HTTP 429

### Error Response:

```json
{
  "error": "Too many requests, please try again later"
}
```

This middleware does not affect other routes.

---

## Custom Validation Middleware

A custom middleware validates the request body for `POST /todos/add`.

### Validation Rules:

* Only `title` is allowed
* `title` must be present
* No extra fields allowed

### Invalid Request Response:

```json
{
  "error": "Invalid request body. Only 'title' is allowed"
}
```

---

## Todo Routes

All Todo routes are handled using Express Router under `/todos`.

### Routes Implemented:

* POST /todos/add
* GET /todos
* GET /todos/:todoId
* PUT /todos/update/:todoId
* DELETE /todos/delete/:todoId

All update and delete operations use route parameters.

---

## Data Persistence

All CRUD operations read from and write to `db.json`.
Changes are reflected immediately and persist after server restarts.

---

## Conclusion

This project demonstrates:

* Proper use of Express middleware
* Clean router separation
* Middleware reusability
* Real-time data persistence
* Modular and readable code structure

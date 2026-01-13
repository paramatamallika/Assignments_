# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users directly interact with. It focuses on how the application looks, feels, and responds to user actions.

### 1. User Interface (UI)

* The frontend is responsible for designing and displaying the user interface.
* It includes elements such as buttons, forms, navigation bars, images, and text.
* Technologies commonly used: **HTML, CSS, JavaScript**, and frameworks like **React, Angular, or Vue**.
* A good UI ensures the application is visually appealing and easy to use.

### 2. User Interaction

* Frontend handles user actions like clicks, typing, scrolling, and form submissions.
* It validates user inputs (e.g., checking if an email format is correct).
* Provides instant feedback such as error messages, loading spinners, or success notifications.

### 3. Communication with Backend

* Frontend sends requests to the backend using APIs (HTTP/HTTPS).
* Receives responses (usually JSON data) from the backend.
* Displays the received data dynamically on the UI.

---

## Q2. Role of Backend (BE)

The **Backend (BE)** is the server-side part of a web application that handles logic, data, and security.

### 1. Server-Side Processing

* Backend processes requests sent from the frontend.
* It applies business rules and logic before returning results.
* Handles tasks such as calculations, validations, and workflow execution.

### 2. Database Handling

* Backend communicates with databases to store, retrieve, update, or delete data.
* Examples of databases: **MySQL, PostgreSQL, MongoDB**.
* Ensures data consistency and integrity.

### 3. Security and Authentication

* Backend manages user authentication (login, logout, sessions, tokens).
* Controls authorization (who can access what).
* Protects the application from attacks like SQL injection and unauthorized access.

---

## Q3. Business Logic

**Business Logic** refers to the rules and processes that define how a business operates within a software application.
It determines **what should happen** when a user performs an action.

### Key Points

* It sits between the frontend and database.
* Ensures that business rules are consistently applied.
* Independent of UI design and database structure.

### Real-World Examples

1. **E-commerce Application**

   * Applying discounts only if the cart value exceeds a certain amount.
   * Calculating final price including tax and shipping charges.

2. **Banking Application**

   * Preventing withdrawals if the account balance is insufficient.
   * Applying interest to savings accounts monthly.

3. **Food Delivery Application**

   * Allowing order placement only during restaurant working hours.
   * Calculating delivery charges based on distance.

---

## Q4. Client–Server Model

The **Client–Server Model** is a communication model where tasks are divided between service providers (servers) and service requesters (clients).

### 1. Client

* The client is the user-side application.
* Examples: web browser, mobile app.
* Sends requests to the server and displays responses.

### 2. Server

* The server is a system that processes client requests.
* Hosts backend logic, databases, and APIs.
* Responds with data or confirmation.

### 3. Communication Process

1. Client sends a request (HTTP/HTTPS).
2. Server processes the request.
3. Server sends a response back to the client.
4. Client displays the result to the user.

---

## Q5. Three-Tier Architecture

**3-Tier Architecture** divides a web application into three separate layers to improve scalability and maintainability.

### 1. Presentation Layer

* This is the frontend or UI layer.
* Interacts directly with users.
* Technologies: HTML, CSS, JavaScript, React.

### 2. Application (Business) Layer

* Contains business logic and application rules.
* Processes requests from the presentation layer.
* Acts as a bridge between UI and data.

### 3. Data Layer

* Handles database operations.
* Stores and manages application data.
* Examples: SQL and NoSQL databases.

### Why 3-Tier Architecture Is Used

* Better separation of concerns.
* Easier maintenance and updates.
* Improved security and scalability.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its speed, flexibility, and ecosystem.

### 1. Performance

* JavaScript uses an event-driven, non-blocking I/O model.
* Efficient for handling multiple requests simultaneously.
* Powered by fast engines like **V8**.

### 2. Ecosystem

* Large package ecosystem through **npm**.
* Thousands of libraries for authentication, databases, and APIs.
* Same language can be used for both frontend and backend.

### 3. Popular Backend Frameworks

* **Node.js** – JavaScript runtime for server-side development.
* **Express.js** – Lightweight and flexible web framework.
* **NestJS** – Structured and scalable backend framework.



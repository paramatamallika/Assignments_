const express = require('express');
const app = express();
const usersRouter = require('./routes/users.routes'); // path must be correct

app.use(express.json());             // for parsing JSON (optional for form-data)
app.use('/users', usersRouter);     // <-- this mounts all /signup, /login etc.

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

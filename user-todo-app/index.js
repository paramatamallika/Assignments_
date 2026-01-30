import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/users.routes.js';
import todoRoutes from './routes/todos.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

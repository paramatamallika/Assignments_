import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';


dotenv.config();


const app = express();
app.use(express.json());


app.use('/users', userRoutes);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
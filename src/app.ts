import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import errorHandler from './middleware/error.middleware';
import userRoutes from './routes/user.routes';
import restaurantRoutes from './routes/restaurant.routes';
import orderRoutes from './routes/order.routes';
import productRoutes from './routes/product.routes';
import platformRoutes from './routes/platform.routes';
import priceComparisonRoutes from './routes/priceComparison.routes';
import redirectionRoutes from './routes/redirection.routes';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/platforms', platformRoutes);
app.use('/api/priceComparisons', priceComparisonRoutes);
app.use('/api/redirections', redirectionRoutes);

app.use(errorHandler);

export default app;

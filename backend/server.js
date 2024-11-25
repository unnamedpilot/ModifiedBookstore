import express from 'express';
import colors from 'colors';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js'
 
dotenv.config()
connectDB()

const app = express();

const PORT = process.env.PORT || 5001;

app.use('/api', bookRoutes)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.NODE_ENV} and listening on PORT ${PORT}`.blue)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})


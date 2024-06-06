const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const router = require('./Routes/authRoutes');
const imageRoutes = require('./Routes/imageRoutes');

dotenv.config();

connectDB();


app.use(express.json());


const PORT = process.env.PORT || 5000;
app.use('/api/users', router);
app.use('/api/images', imageRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const initializeDatabase = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (connection) {
            console.log('Database connected successfully')
        }
    } catch (error) {
        console.error('Error while connecting database', error)

    }
};


module.exports = initializeDatabase
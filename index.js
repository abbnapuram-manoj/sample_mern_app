let express = require('express');
let mongoose = require('mongoose');

let hrRoutes = require('./routes/hr_routes');
let empRoutes = require('./routes/emp_routes');

let app = express();

// Required to parse incoming JSON bodies
app.use(express.json());

// MongoDB connection using 127.0.0.1 to avoid Node localhost resolution issues
mongoose.connect('mongodb://127.0.0.1:27017/hrmanagement')
    .then(() => console.log("Connected to MongoDB: hrmanagement"))
    .catch((err) => console.log("DB connection error:", err));

// Modular routes
app.use('/api/hr', hrRoutes);
app.use('/api/emp', empRoutes);

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

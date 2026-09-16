const express = require('express');
const hrRoutes = require('./routes/hr_routes');
const empRoutes = require('./routes/emp_routes');

const app = express();

app.use(express.json());

// Mount routers
app.use('/api/hr', hrRoutes);
app.use('/api/emp', empRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

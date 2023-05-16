const express = require('express');
const cors = require('cors'); 
const employeesRoutes = require('./routes/employees');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/employees', employeesRoutes);
app.use('/tasks', tasksRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
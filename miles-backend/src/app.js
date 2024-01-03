const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const userRoutes = require('./routes/userRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const stopRoutes = require('./routes/stopRoutes');
const travelPlanRoutes = require('./routes/travelPlanRoutes');

app.use(express.static(path.join(__dirname, '../client/build')));

const uri = "mongodb+srv://ruipdias:rd31122001@milescluster.abaxgx5.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error(error);
  }
}

// Connect to MongoDB when the application starts
connect();

// Dummy user data
const dummyUserData = {
  username: "john_doe",
  password: "secure_password",
  email: "john.doe@example.com",
  profilePic: "path/to/profile-pic.jpg",
};

// Manually create a dummy user on server startup
(async () => {
  try {
    const userController = require('./controllers/userController'); // Import the user service
    const dummyUser = await userController.createUser(dummyUserData);
    console.log('Dummy user created:', dummyUser);
  } catch (error) {
    console.error('Error creating dummy user:', error);
  }
})();

app.use('/api', userRoutes);


app.use('/api', destinationRoutes);


app.use('/api', stopRoutes);


app.use('/api', travelPlanRoutes);



// Serve index.html for other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Disconnect from MongoDB when the application is terminated
process.on('SIGINT', async () => {
  await disconnect();
  process.exit(0);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

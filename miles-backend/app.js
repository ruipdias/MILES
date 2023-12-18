const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/api/data', (req, res) => {
    // Send JSON data as a response
  res.json({ message: 'Hello, Miles! Your backend is connected to your frontend.' });
});
  
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

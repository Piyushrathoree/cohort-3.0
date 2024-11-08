import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Use CORS with a configuration object
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Allow requests from your frontend server
  optionsSuccessStatus: 200
}));

// Define a route to calculate the sum of two numbers
app.get('/', (req, res) => {
  // Extract numbers from query parameters
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  // Check if both numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Please provide two valid numbers as query parameters.' });
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Send the result as plain text
  res.send(`The sum is: ${sum}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js - The file where the server code resides
const express = require('express'); // Import the Express library
const app = express();  // Create an instance of Express
const port = 5000;      // Set the port where the server will listen

// Middleware to parse JSON data in request bodies
app.use(express.json());

// A simple GET route to check if the server is running
app.get('/', (req, res) => {
    res.send('Heart Disease Prediction Backend is Running!');
});

// A POST route to handle the prediction logic
app.post('/predict', (req, res) => {
    const { age, cholesterol, bloodPressure, smoking } = req.body;

    // Basic validation logic for required fields
    if (!age || !cholesterol || !bloodPressure || !smoking) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // A simple prediction logic based on age, cholesterol, bloodPressure, and smoking
    let riskLevel = 'Low';
    let advice = 'Maintain a healthy lifestyle.';

    if (age > 50 || cholesterol > 240 || bloodPressure > 140 || smoking === 'yes') {
        riskLevel = 'High';
        advice = 'You are at high risk for heart disease. Please consult with a healthcare provider.';
    }

    // Send the prediction result as a JSON response
    res.json({ level: riskLevel, advice });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

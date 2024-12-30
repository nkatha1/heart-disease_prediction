document.getElementById("prediction-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the input values
    const age = document.getElementById("age").value;
    const cholesterol = document.getElementById("cholesterol").value;
    const bloodPressure = document.getElementById("bloodPressure").value;
    const smoking = document.getElementById("smoking").value;

    // Perform basic validation
    if (!age || !cholesterol || !bloodPressure || !smoking) {
        alert("Please fill out all fields!");
        return;
    }

    // Example prediction logic (replace with real model or algorithm)
    let risk = "Low";
    if (age > 50 && cholesterol > 200 && bloodPressure > 120 && smoking === "yes") {
        risk = "High";
    } else if (age > 40 || cholesterol > 180) {
        risk = "Moderate";
    }

    // Show result
    const resultDiv = document.getElementById("result");
    const riskLevel = document.getElementById("risk-level");
    const advice = document.getElementById("advice");

    resultDiv.style.display = "block"; // Make the result div visible
    riskLevel.textContent = `Risk Level: ${risk}`;

    // Provide some basic advice based on risk
    if (risk === "High") {
        advice.textContent = "You have a high risk. Please consult with a doctor immediately.";
    } else if (risk === "Moderate") {
        advice.textContent = "You have a moderate risk. Consider making healthy lifestyle changes.";
    } else {
        advice.textContent = "You have a low risk. Keep maintaining a healthy lifestyle!";
    }
});

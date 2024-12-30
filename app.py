from flask import Flask, request, jsonify
import pickle  # or any other model prediction logic here

app = Flask(__name__)

# Example function to simulate prediction based on inputs
def calculate_risk(age, cholesterol, blood_pressure, smoking):
    # This is just a simple example. Replace with actual logic or model.
    risk_score = 0
    
    # Age risk factor
    if age > 60:
        risk_score += 1
    
    # Cholesterol risk factor
    if cholesterol > 240:
        risk_score += 1
    
    # Blood Pressure risk factor
    if blood_pressure > 140:
        risk_score += 1
    
    # Smoking risk factor
    if smoking == "yes":
        risk_score += 1

    # Determine risk level
    if risk_score >= 3:
        return "High Risk", "See a doctor immediately."
    elif risk_score == 2:
        return "Medium Risk", "Consult a doctor."
    else:
        return "Low Risk", "Keep up the good lifestyle."

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the request body
    data = request.get_json()
    age = data.get('age')
    cholesterol = data.get('cholesterol')
    blood_pressure = data.get('bloodPressure')
    smoking = data.get('smoking')

    # Use the example logic to calculate risk
    risk_level, advice = calculate_risk(age, cholesterol, blood_pressure, smoking)

    # Return the prediction and advice as JSON
    return jsonify({'level': risk_level, 'advice': advice})

if __name__ == '__main__':
    app.run(debug=True)

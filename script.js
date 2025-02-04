// Handle input submission for historical data
document.getElementById("submit-btn")?.addEventListener("click", function(event) {
    event.preventDefault();

    // Collect the user's input data
    const temperature = document.getElementById("temperature").value;
    const rainfall = document.getElementById("rainfall").value;
    const fertilizer = document.getElementById("fertilizer").value;
    const irrigation = document.getElementById("irrigation").value;

    // Save data to sessionStorage for future use (for prediction)
    sessionStorage.setItem("temperature", temperature);
    sessionStorage.setItem("rainfall", rainfall);
    sessionStorage.setItem("fertilizer", fertilizer);
    sessionStorage.setItem("irrigation", irrigation);

    // Redirect to the output page (index.html)
    window.location.href = "index.html";
});

// Handle prediction on index.html page using the historical data
if (window.location.pathname.includes("index.html")) {
    // Retrieve the historical data from sessionStorage
    const temp = sessionStorage.getItem("temperature");
    const rainfall = sessionStorage.getItem("rainfall");
    const fertilizer = sessionStorage.getItem("fertilizer");
    const irrigation = sessionStorage.getItem("irrigation");

    // Perform the prediction (basic prediction logic, can be improved with ML models or formulas)
    let predictedYield = 0.33; // Default predicted yield (kg), placeholder logic

    // Simple prediction based on input data
    if (parseFloat(fertilizer) > 50 && parseFloat(irrigation) > 4) {
        predictedYield += 0.5; // Higher fertilizer and irrigation increases yield
    }
    if (parseFloat(temp) > 20 && parseFloat(rainfall) > 100) {
        predictedYield += 0.3; // Good weather boosts yield
    }

    // Show the predicted yield on the page
    document.querySelector(".text-2xl").textContent = `${predictedYield.toFixed(2)} kg`;

    // Optional AI Recommendations Section (could be expanded later)
    document.querySelector(".text-red-400").textContent = "Error getting AI recommendations: You exceeded your current quota, please check your plan and billing details.";
}

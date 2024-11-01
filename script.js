let scenarioActive = false;

// Function to start the scenario
function startScenario() {
    scenarioActive = true;
    addAlarm("LOCA detected! Immediate action required!", "A1");
    document.getElementById("startScenarioBtn").disabled = true; // Disable button once scenario starts
}

// Function to add alarms
function addAlarm(message, code) {
    const alarmsDiv = document.getElementById("alarms");
    const newAlarm = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString();
    newAlarm.innerHTML = `[${timestamp}] ${message} (Code: ${code})`;
    newAlarm.className = "alarm red"; // New alarms in red
    alarmsDiv.appendChild(newAlarm);
    document.getElementById(`lamp${code.charAt(1)}`).classList.add("red"); // Light lamp for alarm
}

// Functions for handswitch actions
function activateECCS() {
    addResponse("Action for A1: Activate ECCS to prevent overheating.");
    clearLamp(1);
}

function startCoolantPumps() {
    addResponse("Action for A2: Start coolant pumps to restore cooling.");
    clearLamp(2);
}

function openPressureReliefValve() {
    addResponse("Action for A3: Open pressure relief valve to prevent rupture.");
    clearLamp(3);
}

function engageContainmentCooling() {
    addResponse("Action for A4: Engage containment cooling to ensure safety.");
    clearLamp(4);
}

function initiateEmergencyAlarms() {
    addResponse("Action for A5: Emergency alarms activated.");
    clearLamp(5);
}

function manualShutoffReactor() {
    addResponse("Action for A6: Manual reactor shut-off initiated.");
    clearLamp(6);
}

function requestFeedback() {
    addResponse("Action for A7: Request feedback on system status.");
    clearLamp(7);
}

// Function to add response
function addResponse(message) {
    const responsesDiv = document.getElementById("responses");
    const newResponse = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString();
    newResponse.innerHTML = `[${timestamp}] ${message}`;
    newResponse.className = "response green"; // Responses in green
    responsesDiv.appendChild(newResponse);
}

// Function to clear lamps after operator response
function clearLamp(index) {
    document.getElementById(`lamp${index}`).classList.remove("red");
    document.getElementById(`lamp${index}`).classList.add("green");
}

// Function to open the selected tab
function openTab(tabName) {
    const tabs = document.querySelectorAll('.panel');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });
    document.getElementById(tabName).style.display = 'block'; // Show selected tab
}

// Event listener for the start scenario button
document.getElementById("startScenarioBtn").addEventListener("click", startScenario);

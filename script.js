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
    clearAlarm(1); // Clear alarm and lamp
}

function startCoolantPumps() {
    addResponse("Action for A2: Start coolant pumps to restore cooling.");
    clearAlarm(2); // Clear alarm and lamp
}

function openPressureReliefValve() {
    addResponse("Action for A3: Open pressure relief valve to prevent rupture.");
    clearAlarm(3); // Clear alarm and lamp
}

function engageContainmentCooling() {
    addResponse("Action for A4: Engage containment cooling to ensure safety.");
    clearAlarm(4); // Clear alarm and lamp
}

function initiateEmergencyAlarms() {
    addResponse("Action for A5: Emergency alarms activated.");
    clearAlarm(5); // Clear alarm and lamp
}

function manualShutoffReactor() {
    addResponse("Action for A6: Manual reactor shut-off initiated.");
    clearAlarm(6); // Clear alarm and lamp
}

function requestFeedback() {
    addResponse("Action for A7: Request feedback on system status.");
    clearAlarm(7); // Clear alarm and lamp
}

// Function to add response
function addResponse(message) {
    const responsesDiv = document.getElementById("responses");
    const newResponse = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString();
    newResponse.innerHTML = `[${timestamp}] ${message}`;
    newResponse.className = "response"; // Standard color for responses
    responsesDiv.appendChild(newResponse);
}

// Function to clear alarms and lamps after operator response
function clearAlarm(index) {
    const alarmsDiv = document.getElementById("alarms");
    const alarmItems = alarmsDiv.getElementsByClassName("alarm");
    
    for (let alarm of alarmItems) {
        if (alarm.innerHTML.includes(`Code: A${index}`)) {
            // Change the alarm color to green
            alarm.className = "alarm green"; // Mark alarm as resolved
            break;
        }
    }
    
    // Clear the corresponding lamp
    document.getElementById(`lamp${index}`).classList.remove("red");
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

let scenarioActive = false;

const alarmsList = [
  { message: "Loss of Coolant detected!", code: "A1" },
  { message: "High Pressure in Reactor!", code: "A2" },
  { message: "Low Water Level in Cooling System!", code: "A3" },
  { message: "Reactor Temperature Rising!", code: "A4" },
  { message: "Power Fluctuation Detected!", code: "A5" },
  { message: "Reactor Shutdown Initiated!", code: "A6" },
  { message: "Emergency Cooling Activated!", code: "A7" },
];

// Function to start the scenario
function startScenario() {
  const randomIndex = Math.floor(Math.random() * alarmsList.length);
  const { message, code } = alarmsList[randomIndex];
  addAlarm(message, code);
}

// Function to switch between tabs
function activateTab(tab) {
  // Logic to switch between tabs goes here
  console.log(`Activating tab: ${tab}`);
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight; // Scroll to the bottom
}

// Function to get the appropriate response action based on the alarm code
function getResponseAction(code) {
  switch (code) {
      case "A1":
          return "Check coolant levels.";
      case "A2":
          return "Reduce pressure immediately.";
      case "A3":
          return "Refill cooling water.";
      case "A4":
          return "Activate cooling systems.";
      case "A5":
          return "Stabilize power output.";
      case "A6":
          return "Initiate reactor shutdown protocols.";
      case "A7":
          return "Ensure emergency systems are functioning.";
      // Add more cases as needed for other alarm codes
      default:
          return "No specific action defined.";
  }
}

// Function to add response
function addResponse(message) {
  const responsesDiv = document.getElementById("responses");
  const newResponse = document.createElement("div");
  const timestamp = new Date().toLocaleTimeString();

  newResponse.innerHTML = `[${timestamp}] ${message}`;
  newResponse.className = "response"; // Standard color for responses
  responsesDiv.appendChild(newResponse);
  scrollToBottom(responsesDiv); // Scroll to bottom after adding response
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

  // Add corresponding response based on the alarm code
  addResponse(`Action for ${code}: ${getResponseAction(code)}`); // Add response for the specific alarm

  scrollToBottom(alarmsDiv); // Scroll to bottom after adding alarm
}

// Function to acknowledge the alarm
function acknowledgeAlarm(code) {
  const alarmsDiv = document.getElementById("alarms");
  const alarm = alarmsDiv.querySelector(`.alarm.red`); // Get the most recent red alarm
  if (alarm) {
      alarm.className = "alarm green"; // Change to green on acknowledgment
      // Update corresponding lamp
      document.getElementById(`lamp${code.charAt(1)}`).classList.remove("red"); // Turn off lamp
  }
}

// Function to handle handswitch activation
function activateHandswitch(code) {
  // Perform actions related to the handswitch here
  // e.g., reduce power, increase flow, etc.
  
  // After handswitch is activated, change the alarm status if necessary
  if (document.querySelector(`.alarm.red`)) {
      // Acknowledge the alarm related to this handswitch
      acknowledgeAlarm(code); // Function to handle acknowledgment
  }
}

// Functions for handswitch actions
function activateECCS() {
    clearAlarm(1); // Clear alarm and lamp
}

function startCoolantPumps() {
    clearAlarm(2); // Clear alarm and lamp
}

function openPressureReliefValve() {
    clearAlarm(3); // Clear alarm and lamp
}

function engageContainmentCooling() {
    clearAlarm(4); // Clear alarm and lamp
}

function initiateEmergencyAlarms() {
    clearAlarm(5); // Clear alarm and lamp
}

function manualShutoffReactor() {
    clearAlarm(6); // Clear alarm and lamp
}

function requestFeedback() {
    clearAlarm(7); // Clear alarm and lamp
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

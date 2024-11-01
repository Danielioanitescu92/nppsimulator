document.addEventListener('DOMContentLoaded', () => {
  const bopTab = document.getElementById('bop-tab');
  const nppTab = document.getElementById('npp-tab');
  const bopPanel = document.getElementById('bop-panel');
  const nppPanel = document.getElementById('npp-panel');

  const switchPanel = (panelToShow, panelToHide, activeTab, inactiveTab) => {
    activeTab.classList.add('active');
    inactiveTab.classList.remove('active');
    panelToShow.classList.remove('hidden');
    panelToHide.classList.add('hidden');
  };

  bopTab.addEventListener('click', () => {
    switchPanel(bopPanel, nppPanel, bopTab, nppTab);
  });

  nppTab.addEventListener('click', () => {
    switchPanel(nppPanel, bopPanel, nppTab, bopTab);
  });
});

const activateSwitch = (switchName) => {
  const alarmDisplay = document.getElementById('alarm-display');
  const responseDisplay = document.getElementById('response-display');
  
  // Define alarm messages, codes, and responses based on switch
  let alarmMessage = "";
  let responseMessage = "";
  let alarmCode = "";

  switch (switchName) {
    case 'BOP Switch 1':
      alarmCode = "A1";
      alarmMessage = `${alarmCode}: Temperature Rising`;
      responseMessage = `Action for ${alarmCode}: Reduce power to stabilize temperature.`;
      break;
    case 'BOP Switch 2':
      alarmCode = "A2";
      alarmMessage = `${alarmCode}: Pressure Decrease`;
      responseMessage = `Action for ${alarmCode}: Increase pressure to optimal level.`;
      break;
    case 'BOP Switch 3':
      alarmCode = "A3";
      alarmMessage = `${alarmCode}: Water Level Low`;
      responseMessage = `Action for ${alarmCode}: Request field feedback and increase water supply.`;
      break;
    case 'NPP Switch 1':
      alarmCode = "A4";
      alarmMessage = `${alarmCode}: Reactor Power Surge`;
      responseMessage = `Action for ${alarmCode}: Shut-off reactor to prevent overload.`;
      break;
    case 'NPP Switch 2':
      alarmCode = "A5";
      alarmMessage = `${alarmCode}: Coolant Flow Reduced`;
      responseMessage = `Action for ${alarmCode}: Improve coolant flow to maintain safe levels.`;
      break;
    case 'NPP Switch 3':
      alarmCode = "A6";
      alarmMessage = `${alarmCode}: Radiation Leak Detected`;
      responseMessage = `Action for ${alarmCode}: Initiate evacuation and seal affected area.`;
      break;
    default:
      alarmCode = "Unknown";
      alarmMessage = `${alarmCode} alarm`;
      responseMessage = `No response available for ${alarmCode}.`;
  }

  // Append new alarm and response to each display
  alarmDisplay.innerHTML += `<div>${alarmMessage}</div>`;
  responseDisplay.innerHTML += `<div>${responseMessage}</div>`;

  // Auto-scroll to the latest message
  alarmDisplay.scrollTop = alarmDisplay.scrollHeight;
  responseDisplay.scrollTop = responseDisplay.scrollHeight;
};

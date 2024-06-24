let timer;
var inactivityThreshold = 600000; 
var experiment1 = 1;
var experiment2 = 1;
var experiment3 = 1;
var experiment4 = 1;
var controlopened = 1;
var modifiedHexValueAll1 = "000000";
var modifiedHexValueAll2 = "000000";
var modifiedHexValueAll3 = "000000";
var modifiedHexValueAll4 = "000000";
var modifiedHexValueAll5 = "000000";
var buttonhovers = "#000000";
var controlColor = "#ade4ff"

function modifyDecimal(value, modifier) {
  var result = (value + modifier) % 256;
  if (result < 0) {
    result += 256;
  }
  return result;
}

function vividspectrumrandomize() {
  var inputHex = document.getElementById("inputColorDesign").value;
  if (/^[0-9A-Fa-f]{6}$/.test(inputHex)) {
    var originalFirst4Digits = inputHex.slice(0, 4);
    var last2Digits = inputHex.slice(4);
    var colors = modifyColors(originalFirst4Digits, parseInt(last2Digits, 16));
    updateUI(colors);
  } else {
    console.log("Invalid Hexadecimal Input entered: " + inputHex);
  }
}

function modifyColors(first4Digits, decimalValue) {
  const modifications = [-150, -70, -30, -10, 30];
  return modifications.map(mod => {
    const newDecimalValue = Math.min(Math.max(decimalValue + mod, 0), 255); // Ensures the value is between 0 and 255
    return "#" + first4Digits + newDecimalValue.toString(16).toUpperCase().padStart(2, '0');
var topbar = document.getElementById("topBanner")
var topbarbar = document.getElementById("topBarTopTop")
topbarbar.style.display = "block"
topbar.style.display = "block"
var check1 = document.getElementById("check1")
experiment1 = 2;
var check2 = document.getElementById("check2")
experiment1 = 2;
  });
}

function updateUI(colors) {
  var body = document.body;
  var smallP = document.getElementById("smallText")
  var smallP2 = document.getElementById("smallText2")
  var button1 = document.getElementById("check1")
  var button3 = document.getElementById("check3")
  smallP.textContent = "Unavailable, personalization used"
  smallP2.textContent = "Unavailable, personalization used"
  button1.disabled = true
  button1.style.backgroundColor = "#FF7D7D"
  button1.onclick = console.log('disabled')
  button3.disabled = true
  button3.style.backgroundColor = "#FF7D7D"
  button3.onclick = console.log('disabled')
  var toptopbar = document.getElementById("topBarTopTop")
  var sidemenu = document.getElementById("topBanner");
  var allbuttons = document.querySelectorAll("button");
  var controlCenter = document.getElementById("controlCenter")
  sidemenu.style.backgroundColor = colors[0];
  body.style.background = colors[2];
  controlColor = colors[1]
  controlCenter.style.backgroundColor = controlColor
  toptopbar.style.backgroundColor = colors[0];


  // Iterate over each button and set its background color
  allbuttons.forEach(button => {
    button.style.backgroundColor = colors[4];
    console.log(colors[4])
  });
}


document.getElementById('boldButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('mainDiv');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();
console.log("clicked")
  if (selectedText !== '') {
    const span = document.createElement('b');
    span.className = 'boldText';
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
  }
});

document.getElementById('iFrameButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('mainDiv');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();
  if (selectedText !== '') {
    const span = document.createElement('iframe');
    span.className = 'iframe';
span.src = 'data:text/html;charset=utf-8,' + encodeURI(selectedText);

    range.deleteContents();
    range.insertNode(span);
  }
});

document.getElementById('underlineButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('textarea');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText !== '') {
    const span = document.createElement('span');
    span.className = 'underlineText';
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
  }
});

document.getElementById('highlightButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('textarea');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText !== '') {
    const span = document.createElement('span');
    span.className = 'highlighted';
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
  }
});


document.getElementById('italicButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('textarea');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText !== '') {
    const span = document.createElement('span');
    span.className = 'italic';
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
  }
});

async function importTxtFile() {
  // Create a hidden file input element
  const input = document.createElement('input');
  input.type = 'file';
input.id = "fileInput"
  input.accept = '.txt, .png, .jpg, .jpeg, .gif, .mp4, .mov, .avi, .mp3, .ogg, .wav'; // Accept various file types
  input.style.display = 'none'; 
  document.body.appendChild(input);
  // Trigger the file selection dialog
  input.click(); 

  // Wait for the user to select a file
  const file = await new Promise((resolve, reject) => {
    input.onchange = () => resolve(input.files[0]);
  });

  // Get the reference to the 'mainDiv' element
  const mainDiv = document.getElementById('mainDiv');

  // Handle the selected file based on its type
  if (file.type.startsWith('text/')) {
    // Process Text Files
    const content = await file.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, 'text/html');
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = xmlDoc.body.innerHTML;

    mainDiv.innerHTML = ''; // Clear any existing content in mainDiv
    mainDiv.appendChild(contentDiv); 

  } else if (file.type.startsWith('image/')) {
    // Process Image Files
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    mainDiv.innerHTML = ''; // Clear any existing content in mainDiv
    mainDiv.appendChild(image);
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")

  } else if (file.type.startsWith('video/')) {
    // Process Video Files
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    video.controls = true; 
    mainDiv.innerHTML = ''; // Clear any existing content in mainDiv
    mainDiv.appendChild(video);
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")

  } else if (file.type.startsWith('audio/')) {
    // Process Video Files
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(file);
    audio.controls = true; 
    soundDiv = document.createElement("div")
    soundDiv.className = "soundDiv"
    audio.className = "audioBar"
    mainDiv.innerHTML = ''; 
    soundDiv.appendChild(audio);
    mainDiv.appendChild(soundDiv);
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")
  } else {
  setTimeout(() => {
    mainDiv.innerHTML = "";
}, 20);   
 mainDiv.innerHTML = "Sorry, this file type isn't supported as it can pose security concerns such as injections"

  }
}

function mainTitle() {
mainInputTitle = document.getElementById("inputTitle").value
if (mainInputTitle === "") {
document.title = "Untitled Document - Notebook Revamped"
} else {
 if (mainInputTitle.length > 12) {
mainInputCutoff = mainInputTitle.substring(0,12)
document.title = mainInputCutoff + "... - Notebook Revamped"
} else {
document.title = mainInputTitle + " - Notebook Revamped"
}
}
}

function changeBackground() {
body = document.body
var input = document.getElementById("urlImage").value
if (input === "") {
body.style.backgroundImage = "url(18.jpg)"
} else {
body.style.backgroundImage = "url(" + input + ")"
}
}


function clearButton() {
div = document.getElementById("mainDiv")
div.innerHTML = ""
}

function AIopenMenu() {
aiMenu = document.getElementById("mainAIDiv")
aiMenu.style.display = "block"
aiButton = document.getElementById("AIimportButton")
aiButton.style.background = "linear-gradient(90deg, #00008B, #FFC0CB)";

mainDiv = document.getElementById("mainDiv")
mainDiv.style.width = "50%"
mainDiv.style.marginRight = "250px"
mainDiv.style.height = "66vh"
}

function AIcloseMenu() {
aiMenu = document.getElementById("mainAIDiv")
aiMenu.style.display = "none"
mainDiv = document.getElementById("mainDiv")
mainDiv.style.width = "70%"
mainDiv.style.marginRight = "0px"
aiButton = document.getElementById("AIimportButton")
aiButton.style.background = "#7070FF";
mainDiv.style.height = "66vh"
}

function downloadtxt() {
    const editableDivs = document.getElementById("mainDiv")
    const textValues = [];
    editableDivs.forEach(div => {
        textValues.push(div.innerHTML);
    });
    const htmlContent = textValues.join('\n');
    const blob = new Blob([htmlContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = document.getElementById("inputTitle").value + '.nb';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(onInactive, inactivityThreshold);
}

function onInactive() {
everything = document.getElementById('allContainer')
everything.style.display = "none"
inactiveDiv = document.getElementById("inactive")
inactiveDiv.style.display = "block"
}
function dissappear() {
everything = document.getElementById('allContainer')
everything.style.display = "block"
inactiveDiv = document.getElementById("inactive")
inactiveDiv.style.display = "none"
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.ontouchstart = resetTimer; // for touch devices
document.onclick = resetTimer;      // for mouse clicks
document.onkeydown = resetTimer; 

function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  var time = document.getElementById("timeAmbience");
  time.innerHTML = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');

}

function updateTime2() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  var time = document.getElementById("timeAmbience2");
  time.innerHTML = hours.toString().padStart(2, '0') + "<br>" + minutes.toString().padStart(2, '0');

}


function openCustom() {
custom = document.getElementById("customization")
custom.style.display = "block"
}

function closeCustom() {
custom = document.getElementById("customization")
custom.style.display = "none"
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '0') {
	custom2 = document.getElementById("experimentalDiv")
	custom2.style.display = "block"
    }
});

function experimentTopBar() {
var check1 = document.getElementById("check1")
if (experiment1 == 1) {
experiment1 = 2
check1.style.backgroundColor = "#008aff"
console.log("on")
var topbar = document.getElementById("topBanner")
topbar.style.backgroundColor = "initial";
} else if (experiment1 == 2) {
experiment1 = 1
check1.style.backgroundColor = "#f3f3f3"
console.log("off")
var topbar = document.getElementById("topBanner")
topbar.style.backgroundColor = "#ADE4FF";
}
}

function experimentDisableColor() {
var check2 = document.getElementById("check2")
var colorthing = document.getElementById("buttonThat")
if (experiment2 == 1) {
experiment2 = 2
check2.style.backgroundColor = "#008aff"
colorthing.style.opacity = "0"
colorthing.onclick = disabled
} else if (experiment2 == 2) {
experiment2 = 1
check2.style.backgroundColor = "#f3f3f3"
colorthing.style.opacity = "1"
colorthing.onclick = openCustom
}
}

function experimentDisableTitleBar() {
var check3 = document.getElementById("check3")
var colorthing = document.getElementById("topBarTopTop")
if (experiment3 == 1) {
experiment3 = 2
check3.style.backgroundColor = "#008aff"
colorthing.style.backgroundColor = "initial"
} else if (experiment3 == 2) {
experiment3 = 1
check3.style.backgroundColor = "#f3f3f3"
colorthing.style.backgroundColor = "#ade4ff"
}
}

function experimentDisableControlPanel() {
var check4 = document.getElementById("check4")
var controlPanel = document.getElementById("controlCenter")
if (experiment4 == 1) {
experiment4 = 2
check4.style.backgroundColor = "#008aff"
controlPanel.style.display = "none"
} else if (experiment4 == 2) {
experiment4 = 1
check4.style.backgroundColor = "#f3f3f3"
controlPanel.style.display = "block"
}
}


function disabled() {
console.log("disabled")
}
function closeEx() {
var closeDiv = document.getElementById("experimentalDiv")
closeDiv.style.display = "none";
}

function controlOpen() {
var controlC = document.getElementById("controlCenter")
var controlB = document.getElementById("musicTile")
var controlA = document.getElementById("websites")
var controlD = document.getElementById("timeButton")
controlC.style.width = "34%"
controlB.style.display = "block"
controlA.style.display = "block"
controlD.style.display = "block"
controlC.style.height = "54vh"
controlC.style.borderRadius = "10px"
controlC.style.backgroundColor = "#7DCBFF"
}

function closeCenter() {
  setTimeout(function() {
    try {
      var controlC = document.getElementById("controlCenter");
      var controlB = document.getElementById("musicTile");
      var controlA = document.getElementById("websites");
      var controlD = document.getElementById("timeButton");

      controlC.style.width = "10%";
      controlB.style.display = "none";
      controlA.style.display = "none";
      controlD.style.display = "none";
      controlC.style.height = "2vh";
      controlC.style.borderRadius = "1000px";
      controlC.style.backgroundColor = controlColor;

      
      console.log("closeCenter function executed successfully");
    } catch (error) {
      console.error("An error occurred in the closeCenter function:", error);
    }
  }, 1);
}


setInterval(updateTime, 60);
setInterval(updateTime2, 60);
updateTime();
setInterval(mainTitle, 1000)
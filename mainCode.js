var timer;
var inactivityThreshold = 600000; 
var experiment1 = 1;
var experiment2 = 1;
var experiment3 = 1;
var experiment4 = 1;
let experiment5 = 1;
let controlopened = 1;
let modifiedHexValueAll1 = "000000";
let modifiedHexValueAll2 = "000000";
let modifiedHexValueAll3 = "000000";
let modifiedHexValueAll4 = "000000";
let modifiedHexValueAll5 = "000000";
let buttonhovers = "#000000";
let controlColor = "#ade4ff"
var mainDivWidth = "70%";
let highlight = "#FFFF00";
let mainDivNumber = 1;
let currentDiv = 0;

console.log(highlight)

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
var mainDiv = document.getElementById("mainDiv" + currentDiv)
  var toptopbar = document.getElementById("topBarTopTop")
  var sidemenu = document.getElementById("topBanner");
  var allbuttons = document.querySelectorAll("button");
  var controlCenter = document.getElementById("controlCenter")
  sidemenu.style.backgroundColor = colors[1];
  body.style.background = colors[2];
  controlColor = colors[1]
  controlCenter.style.backgroundColor = controlColor
  toptopbar.style.backgroundColor = colors[0];
  allbuttons.forEach(button => {
    button.style.backgroundColor = colors[4];
    button.style.border = "3px solid " + colors[0];
    console.log(colors[4])
  });
}

function red() {
	highlight = "#ff0000"
}
function green() {
	highlight = "#33FF00"
}
function blue() {
	highlight = "#2693FF"
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
    span.style.backgroundColor = highlight
    span.textContent = selectedText;
	console.log("done")

    range.deleteContents();
    range.insertNode(span);
  }
});

console.log(highlight)

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

document.getElementById('sizeButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('textarea');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText !== '') {
    const span = document.createElement('span');
    span.style.transition = "0.3s ease"
    var inputy = document.getElementById("sizeInput").value
    span.style.fontSize = inputy + 'px';
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
  const mainDiv = document.getElementById('mainDiv' + currentDiv);

  // Handle the selected file based on its type
  if (file.type.startsWith('text/')) {
    // Process Text Files
    const content = await file.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, 'text/html');
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = xmlDoc.body.innerHTML;

    mainDiv.appendChild(contentDiv); 

  } else if (file.type.startsWith('image/')) {
    // Process Image Files
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    mainDiv.appendChild(image);
alert("REMEMBER! as much as scripts are meant to be images, videos etc. please look at scripts that are txt's and other files as they could run scripts")

  } else if (file.type.startsWith('video/')) {
    // Process Video Files
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    video.controls = true; 
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


function clearButton() {
div = document.getElementById("mainDiv" + currentDiv)
div.innerHTML = ""
}

function AIopenMenu() {
aiMenu = document.getElementById("mainAIDiv")
mainDiv = document.getElementById("mainDiv" + currentDiv)
aiMenu.style.display = "block"
mainDiv.style.width = mainDivWidth
mainDiv.style.width = "50%"
mainDiv.style.marginRight = "250px"
}

function AIcloseMenu() {
aiMenu = document.getElementById("mainAIDiv")
aiMenu.style.display = "none"
mainDiv = document.getElementById("mainDiv" + currentDiv)
mainDiv.style.width = mainDivWidth
mainDiv.style.marginRight = "0px"
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
var everything = document.getElementById('allContainer')
everything.style.display = "none"
var inactiveDiv = document.getElementById("inactive")
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




function openCustom() {
custom = document.getElementById("customization")
custom.style.width = "60%"
custom.style.border = "3px solid #8892BA";
custom.style.height = "70vh"
}

function closeCustom() {
custom = document.getElementById("customization")
custom.style.width = "0%"
custom.style.height = "0vh"
custom.style.border = "none";

}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '0') {
	custom2 = document.getElementById("experimentalDiv")
	custom2.style.width = "30%"
        custom2.style.padding = "5px"
        custom2.style.height = "90vh"
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

function experimentTabletTouchMode() {
var check5 = document.getElementById("check5")
var topBanner = document.getElementById("topBanner")
var topTopBanner = document.getElementById("topBarTopTop")
var mainDiv = document.getElementById("mainDiv")
var allbuttons = document.querySelectorAll("button");
if (experiment5 == 1) {
experiment5 = 2
mainDivWidth = "99%";


  allbuttons.forEach(button => {
    button.style.height = "60px";
    button.style.width = "11%";
    button.style.marginTop = "15px"
  });

topBanner.style.width = "100%";
mainDiv.style.width = mainDivWidth;
topBanner.style.height = "150px;";
check5.style.backgroundColor = "#008aff"
} else if (experiment5 == 2) {
experiment5 = 1
check5.style.backgroundColor = "#f3f3f3"
mainDivWidth = "70%";


  allbuttons.forEach(button => {
    button.style.height = "40px";
    button.style.width = "9%";
    button.style.marginTop = "20px";
  });

topBanner.style.width = "90%";
mainDiv.style.width = mainDivWidth;
topBanner.style.height = "90px;";
}
}


function closeEx() {
var closeDiv = document.getElementById("experimentalDiv")
closeDiv.style.width = "0%";
closeDiv.style.height = "0px"
closeDiv.style.padding = "0px";
}

function getChromeVersion() {
    const userAgent = navigator.userAgent;
    const chromeVersionMatch = userAgent.match(/Chrome\/([0-9.]+)/);
    return chromeVersionMatch ? chromeVersionMatch[1] : null;
}

// Function to compare versions
function isVersionBelow(version, threshold) {
    const [v1, v2] = [version.split('.').map(Number), threshold.split('.').map(Number)];
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        if ((v1[i] || 0) < (v2[i] || 0)) return true;
        if ((v1[i] || 0) > (v2[i] || 0)) return false;
    }
    return false;
}

// Function to check if Chrome version is below the threshold
function checkChromeVersion() {
    const versionThreshold = '117.0.0'; 
    const chromeVersion = getChromeVersion();

    if (chromeVersion) {
        if (isVersionBelow(chromeVersion, versionThreshold)) {
            console.log("%cunsupported", "color: red; font-size: 12px;");
            var element = document.getElementById("allContainer")
	    element.style.display = "none"
        } else {
            console.log("%cavailable", "color: #3DDFFF; font-size: 12px;");
        }
    } else {
        console.log('?? you could be at risk with outdated software if your version is under {versionThreshold}');
    }
}

checkChromeVersion();

function multitasking() {
  var currentMain = document.getElementById("mainDiv" + currentDiv);
  
  currentDiv++;
  
  var newMain = document.createElement("div");
  newMain.id = "mainDiv" + currentDiv;
  newMain.className = "mainDiv";
  newMain.setAttribute("contenteditable", "true")
  // Style the new div
  newMain.style.width = "70%";
  newMain.style.height = "54vh";
  newMain.style.display = "block";

  currentMain.style.width = "0%";
  currentMain.style.float = "right";
  currentMain.style.padding = "0px";
  currentMain.style.border = "none"
  
  var centerElement = document.createElement("center");
  centerElement.appendChild(newMain);
  
  var container = document.getElementById("container");
  if (!container) {
    container = document.body; 
  }
    container.appendChild(centerElement);
  
  console.log("Created new div with ID:", newMain.id);
  
  return newMain; 
}

function buttonShow() {
	if (currentDiv > 0) {
		
	} else {
		
	}
	
}

function openExtrasMenu() {
var extrasFunction = document.getElementById("extrasDiv")
var mainDiv = document.getElementById("mainDiv" + currentDiv)
mainDiv.style.height = "54vh";
extrasFunction.style.height = "60px";
extrasFunction.style.border = "3px solid #82ABBF";
var extraButton = document.getElementById("smallButton")
extraButton.onclick = closeExtrasMenu;
}

function closeExtrasMenu() {
var extrasFunction = document.getElementById("extrasDiv")
var mainDiv = document.getElementById("mainDiv" + currentDiv)
mainDiv.style.height = "64vh";
extrasFunction.style.height = "0px";
extrasFunction.style.border = "none";
var extraButton = document.getElementById("smallButton")
extraButton.onclick = openExtrasMenu;
}

function downloadtxt() {
    const editableDivs = document.getElementById("mainDiv" + currentDiv);
    const htmlContent = editableDivs.innerHTML
    const blob = new Blob([htmlContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = document.getElementById("inputTitle").value + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
setInterval(updateTime, 60);
updateTime();
setInterval(mainTitle, 1000);
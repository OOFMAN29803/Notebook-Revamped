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
    span.src = selectedText;

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

document.getElementById('codeBlockButton').addEventListener('click', function () {
  const contentDiv = document.getElementById('textarea');
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

if (selectedText !== '') {
    const spanDiv = document.createElement('div');
    const span = document.createElement('code');
    span.className = 'codeBlock';
    span.textContent = selectedText;
    spanDiv.className = 'spanDiv';

    spanDiv.appendChild(span);

    range.deleteContents();
    range.insertNode(spanDiv);
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

}

function AIcloseMenu() {
aiMenu = document.getElementById("mainAIDiv")
aiMenu.style.display = "none"
mainDiv = document.getElementById("mainDiv")
mainDiv.style.width = "70%"
mainDiv.style.marginRight = "0px"
aiButton = document.getElementById("AIimportButton")
aiButton.style.background = "#7070FF";
}

async function downloadtxtFull() {
  const htmlContent = document.body.innerHTML;

  const cssURLs = ['styles.css']; // Replace 'styles.css' with the path to your CSS file(s)
  for (const cssURL of cssURLs) {
    const response = await fetch(cssURL);
    const cssContent = await response.text();
    htmlContent += `<style>${cssContent}</style>`;
  }

  const jsURLs = ['script.js']; // Replace 'script.js' with the path to your JavaScript file(s)
  for (const jsURL of jsURLs) {
    const response = await fetch(jsURL);
    const jsContent = await response.text();
    htmlContent += `<script>${jsContent}</script>`;
  }

  const blob = new Blob([htmlContent], { type: 'text/html' });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = document.getElementById("inputTitle").value + '.html';
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


setInterval(mainTitle, 1000)
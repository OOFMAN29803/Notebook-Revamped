document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('#mainDiv');
  const buttons = document.querySelectorAll(".pChanger");

  if (content) {
    let width = content.offsetWidth;

    // Determine the font size based on width
    let fontSize;
    if (width > 1080) {
      fontSize = "15px";
    } else if (width > 720) {
      fontSize = "10px";
    } else if (width > 480) {
      fontSize = "20px"; // Larger size for smaller widths
    } else {
      fontSize = "20px"; // Default case if no other conditions are met
    }

    // Apply the font size to all buttons
    buttons.forEach(button => {
      button.style.fontSize = fontSize;
    });
  }
});




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

function openMenu() {
var menu = document.getElementById("menu")
menu.style.display = "block"
}

function closeMenu() {
var menu = document.getElementById("menu")
menu.style.display = "none"
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
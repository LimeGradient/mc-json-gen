const message = document.querySelector('#messageInput'); // Message
const color = document.querySelector('#colorInput'); // Color
const bold = document.querySelector('#isBold'); // Is Bold
const italic = document.querySelector('#isItalic'); // Is Italic

const jsonDiv = document.querySelector('#genJson'); // Where to put generated JSON
const fullCmdDiv = document.querySelector('#fullCmd'); // Where to put full command

function generateJSON() {
    const p = document.createElement('p');
    const json = jsonDiv.appendChild(p);

    var isBold;
    var isItalic;

    if (bold.checked) { isBold = "true" } else { isBold = "false" };
    if (italic.checked) { isItalic = "true" } else { isItalic = "false" };

    json.innerHTML = `{"text": "${message.value}", "bold": ${isBold}, "italic": ${isItalic}, "color": "${color.value}"}`;
    cmdGen(json);
}

function cmdGen(json) {
    const p = document.createElement('p');
    const cmd = fullCmdDiv.appendChild(p);
    cmd.innerHTML = `/title @a title ${json.innerHTML}`;
}
const loadingText = document.getElementById("loadingText");

const messages = [
    "Initializing Intelligence Core...",
    "Connecting Karnataka SCRB...",
    "Loading Police Database...",
    "Scanning Criminal Records...",
    "Building Intelligence Graph...",
    "Activating AI Engine...",
    "Establishing Secure Network...",
    "Decrypting Crime Intelligence...",
    "Launching CRIMORA..."
];

let index = 0;

const interval = setInterval(() => {

    if (index < messages.length) {

        loadingText.textContent = messages[index];
        index++;

    } else {

        clearInterval(interval);

        setTimeout(() => {

            window.location.href = "pages/login.html";

        }, 1000);

    }

}, 900);
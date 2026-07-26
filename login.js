function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('msg');

    // Check if fields are empty
    if (user === "" || pass === "") {
        msg.style.color = "#ef4444"; // Red color
        msg.innerText = "Please enter both username and password.";
    } 
    // Check for exact match: admin & admin123
    else if (user === "admin" && pass === "admin123") {
        msg.style.color = "#22c55e"; // Green color for success
        msg.innerText = "Login successful! Redirecting...";
        
        // 1-second delay so the user sees the success message before redirecting
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } 
    // If anything else is entered
    else {
        msg.style.color = "#ef4444"; // Red color for error
        msg.innerText = "Invalid Username or Password!";
    }
}
// ===== Section 1: Magic Click Counter =====
let magicCount = 0;
const magicBtn = document.getElementById("magic-btn");
const magicDisplay = document.getElementById("magic-count");

magicBtn.addEventListener("click", () => {
    magicCount++;
    magicDisplay.textContent = magicCount;
});

// ===== Section 2: Background Color Changer =====
const changeColorBtn = document.getElementById("change-color");
changeColorBtn.addEventListener("click", () => {
    const colors = ["#FFC300", "#FF5733", "#33FFBD", "#8D33FF", "#33A2FF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// ===== Section 3: Custom Form Validation =====
const form = document.getElementById("fun-form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const age = document.getElementById("user-age").value.trim();

    let errors = [];

    // Username validation
    if (username.length < 3) errors.push("Username must be at least 3 characters.");

    // Email validation (simple regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) errors.push("Invalid email format.");

    // Age validation
    if (!age || age < 1) errors.push("Please enter a valid age.");

    // Display feedback
    if (errors.length > 0) {
        feedback.style.color = "red";
        feedback.innerHTML = errors.join("<br>");
    } else {
        feedback.style.color = "green";
        feedback.textContent = `Welcome aboard, ${username}! Your signup is complete.`;
        form.reset();
    }
});

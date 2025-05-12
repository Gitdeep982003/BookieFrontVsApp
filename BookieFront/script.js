document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple check (You can add your own validation or API call)
    if (username && password) {
        // Redirect to mainPage.html after successful login
        window.location.href = "mainPage.html";
    } else {
        alert("Please enter both username and password.");
    }
});


document.getElementById('forgotForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    if (email) {
        alert(`Password reset link sent to ${email}`);
        bootstrap.Modal.getInstance(document.getElementById('forgotModal')).hide();
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful!');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
});

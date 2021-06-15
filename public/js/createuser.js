const signupForm = async(event) => {
    event.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    if (username && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            alert("Successfully created user, please log in")
            document.location.replace("/login");
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById("signup-form").addEventListener("submit", signupForm);
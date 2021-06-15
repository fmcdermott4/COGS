const loginForm = async(event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (username && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            setTimeout(function() { //WE NEED THIS FOR A 1 second DELAY
                document.location = "/";
            }, 1000);

            // alert('LOGGED IN')
            // document.location = ("/");
        } else {
            alert("Epic Fail");
        }
    }
};



document.getElementById("login-form").addEventListener("submit", loginForm);
const lpnForm = async(event) => {
    event.preventDefault();
    const lpn = document.getElementById("lpnInput").value.trim();

    if (lpn) {
        const response = await fetch("/api/lpn", {
            method: "POST",
            body: JSON.stringify({ lpn }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response);
        }
        // setTimeout(function() { //WE NEED THIS FOR A 1 second DELAY
        //     document.location = "/";
        // }, 1000);

    } else {
        alert("Epic Fail");
    }
};



document.getElementById("lpn-form").addEventListener("submit", lpnForm);
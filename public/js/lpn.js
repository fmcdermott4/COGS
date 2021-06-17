const lpnForm = async(event) => {
    event.preventDefault();
    const lpn = document.getElementById("lpnInput").value.trim();
    let item;
    if (lpn) {
        let response = await fetch("/api/lpn/", {
            method: "POST",
            body: JSON.stringify({ lpn }),
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json()).then(data => (item = data));
        let subcat = item.data.subcat.split(" ")[0];
        let price = item.data.price;

        response = await fetch("/api/service/", {
            method: "POST",
            body: JSON.stringify({ subcat }),
            headers: { "Content-Type": "application/json" },
        })


        // setTimeout(function() { //WE NEED THIS FOR A 1 second DELAY
        //     document.location = "/";
        // }, 1000);
    }
};



document.getElementById("lpn-form").addEventListener("submit", lpnForm);
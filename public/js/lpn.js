const lpnForm = async(event) => {
    event.preventDefault();
    const lpn = document.getElementById("lpnInput").value.trim();
    const newItemCheck = document.getElementById("newItemCheck").checked;
    const reboxCheck = document.getElementById("reboxCheck").checked;
    const manualCheck = document.getElementById("manualCheck").checked;
    console.log(newItemCheck + " " + reboxCheck + " " + manualCheck);

    let item;
    let service;
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
        }).then(response => response.json()).then(data => (service = data));
        let functionTest = parseFloat(service.data.functiontest.substring(1).trim());
        let cleaning = parseFloat(service.data.cleaning.substring(1).trim());
        let rebox = parseFloat(service.data.rebox.substring(1).trim());

        if ()




        // setTimeout(function() { //WE NEED THIS FOR A 1 second DELAY
        //     document.location = "/";
        // }, 1000);
    }
};



document.getElementById("lpn-form").addEventListener("submit", lpnForm);
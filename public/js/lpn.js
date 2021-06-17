const lpnForm = async(event) => {
    event.preventDefault();
    const lpn = document.getElementById("lpnInput").value.trim();
    const newItemCheck = document.getElementById("newItemCheck").checked;
    const reboxCheck = document.getElementById("reboxCheck").checked;
    const manualCheck = document.getElementById("manualCheck").checked;
    let item;
    let service;
    let functionTest;
    let cleaning;
    let rebox;
    let subcat;
    let price;
    let budget;
    let manual = 2;

    if (lpn) {
        let response = await fetch("/api/lpn/", {
            method: "POST",
            body: JSON.stringify({ lpn }),
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json()).then(data => (item = data));
        subcat = item.data.subcat.split(" ")[0];
        price = item.data.price;
        console.log("price is " + price);
        response = await fetch("/api/service/", {
            method: "POST",
            body: JSON.stringify({ subcat }),
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json()).then(data => (service = data));
        functionTest = parseFloat(service.data.functiontest.substring(1).trim());
        cleaning = parseFloat(service.data.cleaning.substring(1).trim());
        rebox = parseFloat(service.data.rebox.substring(1).trim());
        budget = price * .36;

        console.log("budget is " + budget);

        // function test, clean, rebox and manual
        if (reboxCheck && manualCheck && ((functionTest + cleaning + rebox + manual) < budget)) {
            alert("Function test, cleaning, add manual, rebox");
        } else
        // function test, rebox and manual
        if (reboxCheck && manualCheck && newItemCheck && ((functionTest + rebox + manual) < budget)) {
            alert("Function test, bypass cleaning, add manual, rebox");
        } else // function test only
        if (newItemCheck && !reboxCheck) {
            alert("Function test, bypass cleaning");
        } else
        // function test and rebox
        if (newItemCheck && ((rebox + functionTest) < budget)) {
            alert("Function test, bypass cleaning, rebox");
        } else
        // function test and clean
        if () {
            alert("Function test, clean");
        } else
        // function test, clean and rebox
        if () {
            alert("Function test, cleaning, rebox");
        } else
        // function test and manual
        if () {
            alert("Function test, bypass cleaning, add manual");
        } else

        // function test, clean and manual
        if () {
            alert("Function test, clean, add manual");
        } else

        // COGS
        {
            alert("COGS failure");
        }
        document.location = "/";
        return;
    }
};



document.getElementById("lpn-form").addEventListener("submit", lpnForm);
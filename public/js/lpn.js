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
        console.log("Function test is " + functionTest);
        console.log("Cleaning is " + cleaning);
        console.log("Manual is 2");
        console.log("Rebox is " + rebox);
        // function test, clean, rebox and manual
        if (reboxCheck && manualCheck && ((functionTest + cleaning + rebox + manual) < budget)) {
            console.log("Services cost is " + (functionTest + cleaning + rebox + manual))
            alert("Function test, clean, add manual, rebox");
        } else
        // function test, clean and rebox
        if (reboxCheck && !manualCheck && ((functionTest + rebox + cleaning) < budget)) {
            console.log("Services cost is " + (functionTest + rebox + cleaning))
            alert(lpn + " Function test, clean, rebox");
        } else
        // function test, clean and manual
        if (!reboxCheck && manualCheck && ((functionTest + cleaning + manual) < budget)) {
            console.log("Services cost is " + (functionTest + cleaning + manual))
            alert(lpn + " Function test, clean, add manual");
        } else // function test and clean
        if (!reboxCheck && !manualCheck && ((functionTest + cleaning) < budget)) {
            console.log("Services cost is " + (functionTest + cleaning))
            alert(lpn + " Function test, clean");
        } else
        // function test and rebox
        if (reboxCheck && !manualCheck && newItemCheck && ((functionTest + rebox) < budget)) {
            console.log("Services cost is " + (functionTest + rebox))
            alert(lpn + " Function test, bypass cleaning, rebox");
        } else
        // function test and manual
        if (!reboxCheck && manualCheck && newItemCheck && ((functionTest + manual) < budget)) {
            console.log("Services cost is " + (functionTest + manual))
            alert(lpn + " Function test, bypass cleaning, add manual");
        } else
        // function test only
        if (!reboxCheck && !manualCheck && newItemCheck) {
            console.log("Services cost is " + functionTest)
            alert(lpn + " Function test, bypass cleaning");
        } else
        // COGS
        {
            alert(lpn + " COGS failure");
        }
        document.location = "/";
        return;
    }
};



document.getElementById("lpn-form").addEventListener("submit", lpnForm);
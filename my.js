function readGS() {
    const url = "https://script.google.com/macros/s/AKfycbzeIp0ET5Dx2GVOroB8qX7we7uVrZhxHrTquNq_U6_txpmWL1Nk00M8tqJPqmNd0_-f/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            // console.log(d);
            document.getElementById('app').textContent = d[0].status;
        });
}

// developer.mozilla.org References > Web APIs > Fetch API > Using the Fetch
// mode: change to "no-cors"
function writeGS() {
    const url = "https://script.google.com/macros/s/AKfycbzeIp0ET5Dx2GVOroB8qX7we7uVrZhxHrTquNq_U6_txpmWL1Nk00M8tqJPqmNd0_-f/exec";
    const data = { name: "Kelly" };

    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
    );


}

document.getElementById("btnRead").addEventListener("click", readGS);

document.getElementById("btnWrite").addEventListener("click", writeGS);

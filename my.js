function testGS(){
    const url="https://script.google.com/macros/s/AKfycbzeIp0ET5Dx2GVOroB8qX7we7uVrZhxHrTquNq_U6_txpmWL1Nk00M8tqJPqmNd0_-f/exec";

    fetch(url)
        .then(d=>d.json())
        .then(d=>{
            console.log(d);
            document.getElementById('app').textContent=d[0].status;
        })
}

document.getElementById("btn").addEventListener("click",testGS);
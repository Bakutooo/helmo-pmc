export default {
    //url: "https://pmc.girafes.be/api",
    url: "192.168.1.56:50001",
    postConfig: (data) => ({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
}
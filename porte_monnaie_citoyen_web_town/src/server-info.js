export default {
    url: "https://pmc.girafes.be/api",
    postConfig: (data) => ({
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    }),
    putConfig: (data) => ({
        method : "UPDATE",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    })
}
export default {
    url: "https://juicy.girafes.be/api/pmc",
    postConfig: (data) => ({
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    })
}
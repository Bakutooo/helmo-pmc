export default {
    url: "http://192.168.1.56:30000/backend",
    postConfig: (data) => ({
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    })
}
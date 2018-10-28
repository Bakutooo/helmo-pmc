export default {
    url: "http://192.168.0.9:30000",
    postConfig: (data) => ({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
}
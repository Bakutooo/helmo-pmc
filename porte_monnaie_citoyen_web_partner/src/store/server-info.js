export default {
    url: "https://pmc.girafes.be/api",
    postConfig: (data) => ({
        method : "POST",
        body : JSON.stringify(data),
        credentials: 'include',
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    }),
    putConfig: (data) => ({
        method : "PUT",
        body : JSON.stringify(data),
        credentials: 'include',
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        }
    }),
    getConfig: {
        credentials: 'include',
    },
    deleteConfig: {
        method: 'DELETE',
        credentials: 'include',
    }
}
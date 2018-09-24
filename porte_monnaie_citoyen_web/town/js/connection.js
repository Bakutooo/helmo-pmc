$(function() {
    $("input[name='button_co']").on('click', (evt) => {
        evt.preventDefault();
        let email = $("input[name='email']").val();
        let password = $("input[name='password']").val();

        fetch('http://localhost/backend/partner/connexion', {
            method: "POST",
            body: JSON.stringify({mail: email, password: password}),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res));
    })
});
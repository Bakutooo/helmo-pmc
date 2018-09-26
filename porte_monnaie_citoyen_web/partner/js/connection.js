$(function() {
    $("input[name='button_co']").on('click', (evt) => {
        evt.preventDefault();
        let email = $("input[name='email']").val();
        let password = $("input[name='password']").val();

        fetch('http://girafes.be/backend/partner/connection', {
            method: "POST",
            body: JSON.stringify({mail: email, password: password}),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            $("#error").empty();
            if(res.error === undefined){
                $.get('partner/html/dashboard.html', (data) => {
                    $('main').empty();
                    $('main').append($(data));
                    localStorage.setItem('partner', JSON.stringify(res));
                });
            } else {
                $('#error').append(res.error);
            }
        });
    })
});
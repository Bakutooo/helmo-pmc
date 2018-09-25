$(function() {
    $("input[name='button']").on('click', (evt) => {
        evt.preventDefault();
        let name = $("input[name='name']").val();
        let password = $("input[name='password'").val();

        fetch('http://localhost/backend/town/connection', {
            method: "POST",
            body: JSON.stringify({name: name, password: password}),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.error === undefined){
                $.get('town/html/dashboard.html', (data) => {
                    $('main').empty();
                    $('main').append($(data));
                    localStorage.setItem('town', JSON.stringify(res));
                });
            }
            else{
                $('#error').append(res.error);
            }
        });
    })
});
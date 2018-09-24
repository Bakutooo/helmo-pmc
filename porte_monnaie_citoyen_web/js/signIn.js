function setUpSignIn(){
    let form = "<form action = '#' id = 'signInForm'></form>";
    let button = "<input type='submit' value='button'>";

    $('main').append(form);
    $('#signInForm').append("<p>Nom</p>");
    $('#signInForm').append("<input type = 'text' id = 'name'/>");

    $('#signInForm').append("<p>Email</p>");
    $('#signInForm').append("<input type = 'text' id = 'email'/>");

    $('#signInForm').append("<p>Mot de passe</p>");
    $('#signInForm').append("<input type = 'password' id = 'password'/><br/><br/>");

    $('#signInForm').append("<p>Téléphone</p>");
    $('#signInForm').append("<input type = 'text' id = 'phone'/><br/><br/>");


    $('#signInForm').append(button);

    $('#signInForm').on('submit', function(){
        register();
        $('main').empty();   
        //Go to panelEvent
    });
}


function register(){
    let data = {
        name: $('#name').val(),
        mail: $('#email').val(),
        password: $('#password').val(),
        tel : $('#phone').val()
    };

    console.log(data);  
    var form = new FormData($('#signInForm'));

    fetch("http://10.30.200.230:30000/partner", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(result => result.json())
    .then(result => {
        if(result.hasOwnProperty("error")){
        }
        
    })

}
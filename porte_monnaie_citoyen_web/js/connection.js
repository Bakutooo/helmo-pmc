let form = "<form action = '#' id = 'signInForm'></form>";
let button = "<input type='submit' value='Se connecter'>";

$('main').append(form);
$('#signInForm').append("<p>Email</p>");
$('#signInForm').append("<input type = 'text' id = 'email'/>");
$('#signInForm').append("<p>Mot de passe</p>");
$('#signInForm').append("<input type = 'password' id = 'password'/><br/><br/>");
$('#signInForm').append(button);

$('#signInForm').on('submit', function(){
    $('main').empty();   
    //Go to EventPanel
}); 


$('#signInForm').after('<p id = "signIn">Inscrivez-vous !</p>');
$('#signIn').click(function(){
    $('main').empty();
    setUpSignIn();
});

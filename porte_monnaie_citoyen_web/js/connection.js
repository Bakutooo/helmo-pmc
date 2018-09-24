let form = ("<form action = '#' id = 'signInForm'></form>");
let button = "<input type='submit' value='button'>"

$('main').append(form);
$('#signInForm').append("<input type = 'text id = 'email'/>");
$('#signInForm').append(button);

$('#signInForm').on('click', function(){
    $('main').empty();
    $('main').append('<script src="./js/signin.js"></script>')
    
});
function setUpEvent(idEvent){
    $('main').empty();
    fetch("http://localhost:30000/partner/", {mode: "cors"})
    .then(res => res.json())
    .then(res => console.log(res))
        
}
function next(info){
    let mainContenent = info + "<img src='https://via.placeholder.com/200x200'>"+
        "<h2>Un titre (date_deb - date_fin)</h2>"+
        "<p>Description que le serveur donne via l'ID</p>"+
        "<h2>Localisation</h2>"+
        "<p>L'adresse de l'événement</p>"+
        "<p>(longitude - latitude)</p>";

    $('main').append(mainContenent);
}
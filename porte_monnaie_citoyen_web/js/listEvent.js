let div ="<div class='grid-container'>"+
"<div class='item1'>Title</div>"+
"<div class='item3'>Gain</div>" + 
"<div class='item4'>DateDebut</div>"+
"<div class='item5'>DateFin</div>"+
"</div>";
let button="<input id='detail' type='submit' value='button'>";

function setUplistEvent(){  
    fetch("http://10.30.200.230:30000/partner/")
    .then(function(data) {
        next(data);
    }).catch(function(error) {
        // If there is any error you will catch them here
    });
    
    $('#detail').on('submit', function(){
       setUpEvent();
    });
}

function next(x){
    x.forEach(element => {
        $('main').append(div);
        $('main').append(button);
    });
}
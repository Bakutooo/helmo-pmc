let div ="<div class='grid-container'>"+
"<div class='item1'>Title</div>"+
"<div class='item3'>Gain</div>" + 
"<div class='item4'>DateDebut</div>"+
"<div class='item5'>DateFin</div>"+
"</div>";
let button="<input id='detail' type='submit' value='button'>";

function setUplistEvent(){  
    $.ajax("10.30.200.230:30000/partner/events", {
        data: {id: "5ba7eff3d3c51d14ff8ac40d"},
        dataType:"json",
        method: "GET",
        succes: function(data, textStatus, jqXHR){
            next(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("fail");
        }
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
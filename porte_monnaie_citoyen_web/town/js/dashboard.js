$(function() {
    let partner = JSON.parse(localStorage.getItem('town'));
    
    console.log(partner);

    for(let i = 0; i < 10; i++){
        // let div = $.get("../html/request.html").clone()
        let requ = "<div><div>Requête n°" + (i + 1) + "</div><div>Requête de partenariat</div><div><button>Accepter</button><button>Refuser</button></div></div>";
        let event = "<div><div>Requête n°" + (i + 1) + "</div><div>Requête d'évenement</div><div><button>Accepter</button><button>Refuser</button></div></div>";
        $('#requests').append(requ);
        $('#events').append(event);
    }

});
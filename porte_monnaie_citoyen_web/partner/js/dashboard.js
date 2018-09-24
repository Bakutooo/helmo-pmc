$(function() {
    let partner = JSON.parse(localStorage.getItem('partner'));
    
    console.log(partner);

    partner.events.forEach(item => {
        $('#events').append(item);
    });
});
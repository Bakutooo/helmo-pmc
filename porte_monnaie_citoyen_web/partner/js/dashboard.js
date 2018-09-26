$(function() {
    let partner = JSON.parse(localStorage.getItem('partner'));
    
    partner.events.forEach(item => {
        $('#events').append(`<div class='row'>
                                <span> ${item.title} </span>
                                <div>
                                    <input class='button_mini_qr' type='submit' id='${item._id}' name='btn_qr_event' value='QR'/>
                                    <input class='button_mini_suppr' type='submit' id='${item._id}' name='btn_suppr_event' value='X'/>
                                </div>
                            </div>`);
    });
    partner.deals.forEach(item => {
        $('#deals').append(`<div class='row'>
                                <span> ${item.title} | ${item.price}PC </span>
                                <div>
                                    <input class='button_mini_qr' type='submit' id='${item._id}' alt='${item.price}' name='btn_qr_deal' value='QR'/>
                                    <input class='button_mini_suppr' type='submit' id='${item._id}' name='btn_suppr_deal' value='X'/>
                                </div>
                            </div>`);
    });

    $("input[name='button_add_deal']").on('click', function(evt) {
        evt.preventDefault();
        $.get('partner/html/ajout-deal.html', (data) => {
            $('main:first').append(data);
        });
    });

    $("input[name='button_add_event']").on('click', (evt) =>{
        evt.preventDefault();
        $.get('partner/html/demande-event.html', (data) => {
            $('main:first').append(data);
        });
    });

    $("input[name='btn_qr_deal']").on('click', function(evt){
        evt.preventDefault();
        $('main:first').append(`<div id='qr_payment'>
                                    <div id='qrcode'></div>
                                    <input value='fermer' type='submit' name='button_fermer_qr'/>
                                </div>`);

        $("input[name='button_fermer_qr']").on('click', (evt) => {
            evt.preventDefault();
            $("#qr_payment").remove();
        });

        $("#qrcode").qrcode('http://girafes.be/backend/transaction/qr/' + partner._id + '/' + this.alt);
    });

    $("input[name='btn_qr_event']").on('click', function(evt){
        evt.preventDefault();
        $('main:first').append(`<div id='qr_payment'>
                                    <h3>Participation</h3>
                                    <div id='qrcode_p'></div>
                                    <h3>Completion</h3>
                                    <div id='qrcode_c'></div>
                                    <input value='fermer' type='submit' name='button_fermer_qr'/>
                                </div>`);

        $("input[name='button_fermer_qr']").on('click', (evt) => {
            evt.preventDefault();
            $("#qr_payment").remove();
        });

        $("#qrcode_p").qrcode('http://girafes.be/backend/event/qr/participate/' + this.id);
        $("#qrcode_c").qrcode('http://girafes.be/backend/event/qr/complete/' + this.id);
    });
});
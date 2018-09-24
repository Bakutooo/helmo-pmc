$(function() {
    $("input[name='button_add']").on('click', (evt) => {
        evt.preventDefault();
        
        let title = $("input[name='title']").val();
        let description = $("input[name='description']").val();
        let town = $("input[name='town']").val();
        let adress = $("input[name='adress']").val();
        let gain = $("input[name='gain']").val();

        $('#demande-event').remove();
    });
});
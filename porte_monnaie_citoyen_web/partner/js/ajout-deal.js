$(function() {
    $("input[name='button_add']").on('click', (evt) => {
        evt.preventDefault();

        let title = $("input[name='title']").val();
        let description = $("input[name='description']").val();
        let price = $("input[name='price']").val();

        console.log(title + "   " + description + "    " + price);
        
        $('#ajout-deal').remove();
    });
});
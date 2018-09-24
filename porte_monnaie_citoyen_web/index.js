$(function() {
    $("#town_button").on("click", () => {
        $.get('town/html/connection.html', (data) => {
            $("main").html($(data))
        });
    });

    $("#partner_button").on("click", () => {
        $.get('partner/html/connection.html', (data) => {
            $("main").html($(data))
        });
    });
});
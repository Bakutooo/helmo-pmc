$(function() {
    $("#town_button").on("click", () => {
        $.get('town/html/connection.html', (data) => {
            $("main").html($(data))
        });
    });
});
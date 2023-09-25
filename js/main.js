// WEB303 Assignment 2

$(document).ready(function () {

    $("#prospect").click(function (event) {
        event.preventDefault();
        loadContent("prospect.html");
    });

    $("#retain").click(function (event) {
        event.preventDefault();
        loadContent("retain.html");
    });

    $("#convert").click(function (event) {
        event.preventDefault();
        loadContent("convert.html");
    });
});

function loadContent(page) {
    $.get(page, function (data) {
        $('#content')
            .hide()
            .empty()
            .html(data);
        $('#content').fadeIn();
    })
    .catch (error => {
        console.error("There was an error with the content", error);
    });
}
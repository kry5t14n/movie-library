$(document).ready(function () {
    $("#add-btn").on('click', function () {
        $(".section2").removeClass("hidden");
    });

    $("#close-btn-form").on('click', function () {
        $(".section2").addClass("hidden");
    });

    $(".star").on('click', function () {
        $(this).html("&#9733;");
        let element = $(this);
        while(element.prev().hasClass("star")) {
            element = element.prev();
            element.html("&#9733;");
        }
        element = $(this);
        while(element.next().hasClass("star")) {
            element = element.next();
            element.html("&#9734;");
        }
    });
});
$(document).ready(function () {
    $("#add-btn").on('click', function () {
        $(".section2").removeClass("hidden");
    });

    $("#close-btn-form").on('click', function () {
        $(".section2").addClass("hidden");
        $("#title").val('');
        $("#genre").val('None');
        $("#genre").removeClass("wrong");
        $("#title").removeClass("wrong");
    });

    $("#add-form").on('click', function() {
        if($("#title").val() != '' & $("#genre").val() != 'None') {
            let title = $("#title").val();
            let genre = $("#genre").val();
            let randomId = Math.round(Math.random()*100000);
            $(".section3").append(`
            <article>
                <span class="close-btn" id="${randomId}${title}">&#9932;</span>
                <h2>${title}</h2>
                <h3>${genre}</h3>
                <div class="rating">
                    <span class="star ${randomId}${title}">&#9734;</span>
                    <span class="star ${randomId}${title}">&#9734;</span>
                    <span class="star ${randomId}${title}">&#9734;</span>
                    <span class="star ${randomId}${title}">&#9734;</span>
                    <span class="star ${randomId}${title}">&#9734;</span>
                </div>
            </article>`);

            $(`.${randomId}${title}`).on('click', function () {
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

            $(`#${randomId}${title}`).on('click', function () {
                $(this).parent().remove();
            });

            $(".section2").addClass("hidden");

            $("#title").val('');
            $("#genre").val('None');
            $("#genre").removeClass("wrong");
            $("#title").removeClass("wrong");
        } else if($("#title").val() == '' & $("#genre").val() != 'None') {
            $("#genre").removeClass("wrong");
            $("#title").addClass("wrong");
        } else if($("#title").val() != '' & $("#genre").val() == 'None') {
            $("#genre").addClass("wrong");
            $("#title").removeClass("wrong");
        } else {
            $("#genre").addClass("wrong");
            $("#title").addClass("wrong");
        }
    });
});
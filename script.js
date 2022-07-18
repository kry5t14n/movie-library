$(document).ready(function () {
    class Movie {
        constructor(title, genre, stars, id) {
            this.title = title;
            this.genre = genre;
            this.stars = stars;
            this.id = id;
        }
    }

    const starsFunc = (id, title) => {
        $(`.${id}${title}`).on('click', function () {
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
    }

    const closeBtn = (id, title) => {
        $(`#${id}${title}`).on('click', function () {
            $(this).parent().remove();
            movies = movies.filter((mv) => mv.title != title);
            localStorage.setItem('movies', JSON.stringify(movies));
        });
    }

    const resetForm = () => {
        $("#title").val('');
        $("#genre").val('None');
        $("#genre").removeClass("wrong");
        $("#title").removeClass("wrong");
    }

    const displayMovie = (title, genre, id) => {
        $(".section3").append(`
            <article>
                <span class="close-btn" id="${id}${title}">&#9932;</span>
                <h2>${title}</h2>
                <h3>${genre}</h3>
                <div class="rating">
                    <span class="star ${id}${title}">&#9734;</span>
                    <span class="star ${id}${title}">&#9734;</span>
                    <span class="star ${id}${title}">&#9734;</span>
                    <span class="star ${id}${title}">&#9734;</span>
                    <span class="star ${id}${title}">&#9734;</span>
                </div>
            </article>`);
        
        starsFunc(id, title);
        closeBtn(id, title);
    }

    let movies = [];
    movies = JSON.parse(localStorage.getItem('movies'));

    console.log(movies);

    movies.forEach(mv => {
        displayMovie(mv.title, mv.genre, mv.Id)
    });

    $("#add-btn").on('click', function () {
        $(".section2").removeClass("hidden");
    });

    $("#close-btn-form").on('click', function () {
        $(".section2").addClass("hidden");
        resetForm();
    });

    $("#add-form").on('click', function() {
        if($("#title").val() != '' & $("#genre").val() != 'None') {
            let title = $("#title").val();
            let genre = $("#genre").val();
            let randomId = Math.round(Math.random()*100000);
            let stars = 0;
            movies.push(new Movie(title, genre, stars, randomId));
            localStorage.setItem('movies', JSON.stringify(movies));

            displayMovie(title, genre, randomId);

            $(".section2").addClass("hidden");

            resetForm();
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
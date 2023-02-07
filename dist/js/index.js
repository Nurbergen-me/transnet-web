// Sliders

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        focus: 'center',
        autoplay: true,
        fixedHeight: 470,
        fixedWidth: '70%',
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        throttle: 300,
        breakpoints: {
            1025: {
                fixedWidth: '100%',
                fixedHeight: 370,
            },
            720: {
                fixedWidth: 400,
                fixedHeight: 200,
            }
        }
    }).mount();
    new Splide('#splide-news', {
        type: 'loop',
        perPage: 2,
        autoplay: true,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        throttle: 300,
        breakpoints: {
            1025: {
                perPage: 1,
            }
        }
    }).mount();
    new Splide('#splide-reviews', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 8000,
        flickMaxPages: 3,
        // updateOnMove: true,
        pagination: false,
        throttle: 300,
        // breakpoints: {
        //     1440: {
        //         perPage: 1,
        //         padding: '30%'
        //     }
        // }
    }).mount();
});

function toggleMenu(state) {
    var element = document.getElementById("hidden-menu");

    if (state === 'close') {
        element.classList.remove("active");
    } else {
        element.classList.toggle("active");
    }
}

// Video player 

var playButton = document.getElementById("play_button");
var playWrap = document.getElementById("play_wrap");
var video = document.getElementById("video");
playWrap.addEventListener("click", function() {
    if (video.paused == true) {
        video.play();
        playButton.classList.add("hidden");
    } else {
        video.pause();
        playButton.classList.remove("hidden");
    }
});
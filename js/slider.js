sliderInt=1;
sliderNext=2;

$(document).ready(function(){
    $("#slider>img#1").fadeIn(300);
    startSlider();
});

//Begins a loop over all images in the slider element
function startSlider(){
    count = $("#slider>img").size();
    loop=setInterval(function(){

        if(sliderNext > count)
            sliderNext = 1;

        $("#slider>img").fadeOut(300);
        $("#slider>img#" + sliderNext).fadeIn(300);
        sliderInt = sliderNext;
        sliderNext +=1;
    }, 3000)
}

function prev() {
    newSlider = sliderInt-1;
    showSlide(newSlider);
}

function next() {
    newSlider = sliderInt+1;
    showSlide(newSlider);
}

function showSlide(id) {
    window.clearInterval(loop);
    if(id > count)
        id = 1;
    else if(id < 1)
        id = count;     //goes back to max image

    $("#slider>img").fadeOut(300);
    $("#slider>img#" + id).fadeIn(300);
    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
}

$("#slider>img").hover(
        function(){
            window.clearInterval(loop);
            $("#status1").hide();
            $("#status2").fadeIn(100);
        },
        function(){
            startSlider();
            $("#status1").fadeIn(100);
            $("#status2").hide();
        }
)

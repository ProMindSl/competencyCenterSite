/* ----------- front.js ------------ */
function toggleFront()
{
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 400)
        $(".front").addClass("mt-70");
    else
        $(".front").removeClass("mt-70");
}
$(document).scroll(function()
{
    toggleFront();
})

$(document).ready(function()
{
	animateShowFrontTitle('.carousel-item.active > .carousel-caption > h3', 100);
	animateShowFrontTitle('.carousel-item.active > .carousel-caption > p', 200);
});

function animateShowFrontTitle(slideID, fromX)
{
	TweenMax.from(slideID, 1, {x:fromX});
	TweenMax.from(slideID, 1.5, {opacity:0});
}

/*$('.carousel-item').onshow(
{
	animateShowFrontTitle('.carousel-item.active > .carousel-caption > h3', 100);
	animateShowFrontTitle('.carousel-item.active > .carousel-caption > p', 200);  
});*/

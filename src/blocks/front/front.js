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
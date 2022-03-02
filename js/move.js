$(document).ready(function() {
    var link = $('.navbar .bar_content');
    // Move to specific section when click on menu link
    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });
    $(window).scroll(function() {
        let scrollPos = $(this).scrollTop();
        let scrollDistance = scrollPos + 250;

        $(".bar p[href^='#']").each(function() {
            let currLink = $(this);
            let refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollDistance && refElement.position().top + refElement.height() > scrollDistance) {
                $(".bar p").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
});
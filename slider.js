window.addEventListener('DOMContentLoaded', function(event){
    $(document).ready(function(){
        $('.slider').slick({
            dots: false,
            arrows: false,
            responsive: [{
                breakpoint: 900,
                settings: {
                    arrows: true,
                }
            }],
            mobileFirst: true,
        });
    });
});
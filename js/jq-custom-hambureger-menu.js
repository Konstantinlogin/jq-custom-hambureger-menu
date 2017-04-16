$(document).ready(function () {

    //open the lateral panel
    $('.menu-btn').on('click', function (event) {
        
        event.preventDefault();

        $(this).toggleClass('menu-btn--fixed open');

        $('.menu-panel').toggleClass('visible-block');




    });
    
    //close the lateral panel
    $('.menu-panel').on('click', function (event) {
        if ($(event.target).is('.menu-panel')) {
            $(this).removeClass('visible-block');
            $('.menu-btn').removeClass('menu-btn--fixed open');
            event.preventDefault();
        }


    });

});
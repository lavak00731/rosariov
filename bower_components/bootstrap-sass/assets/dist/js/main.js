(function ($) {
    'use strict';
    var menuTrigger = $('.navbar-toggle');
    var mainMenu = $('.main-nav');
    if (menuTrigger.length > 0 && mainMenu.length > 0) {
        menuTrigger.on('click', function (e) {
            e.stopPropagation();
            mainMenu.toggleClass('hidden');
        });
        mainMenu.on('click', function () {
            $(this).addClass('hidden');
        });
    }
})(jQuery);

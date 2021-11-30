
// Бургер
$(document).ready(function() {
    $('.header__burger, .header__list_link').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        
        $('body').toggleClass('lock_bur');
    });
});
// Бургер закончился

new Swiper('.swiper-container', {
    // Вывод стрелок навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Вывод скроллбара
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    autoplay: {
        delay: 4000,
        stopOnLastSlide: true,
    },
    speed: 800,
    //slidesPerView: 3,
    //spaceBetween: 0,
    initialSlide: 0,
    loop: true,
    loopedSlides: 3,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    
    effect: 'coverflow',

    coverflowEffect: {
        //Угол
        rotate: 20,
        //Наложение
        stretch: 0,
        //Тень
        slideShadows: true,
        scale: 0.6,
    },
    
})
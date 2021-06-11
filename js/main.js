var heroes = tns({
    container: '.main',
    controls: false,
    items: 1,
    navPosition: 'bottom',
    speed: 1000,
    startIndex: 1
});

var products = tns({
    container: '.products__carousel__options',
    controls: false,
    fixedWidth: 160,
    items: 3,
    speed: 500,
    rewind: false,
    loop: false,
    nav: false,
    responsive: {
        992: {
            disable: true
        }
    }
});
var options = {
    duration: 2000,
    numVisible: 1
};
var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, options);
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });
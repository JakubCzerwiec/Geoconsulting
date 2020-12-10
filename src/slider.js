
function sliderRender () {
    const animations = [];
    let startingPoint = 1;
    const interval = setInterval(changeSlide, 1000);

    function changeSlide () {
        document.querySelector('.mainSaidbar').innerHTML = `<img src="src/img/${startingPoint}.jpg>`;
    }
}
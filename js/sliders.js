
let planetsSliderItems = document.querySelectorAll(".planets-slider-item");
let newsSlider = document.querySelectorAll(".news-item");

for (let i = 0; i < 5; i++) {
    planetsSliderItems[i].style.backgroundImage = `url(img/ps${i}.png)`;
    newsSlider[i].style.backgroundImage = `url(img/ns${i}.png)`
}

const imageNames = ["aventura.svg", "combate.svg", "Educacional.svg", "jogo-corrida.svg", "Jogo.svg", "Quiz.svg", "RPG.svg"];

const sliderItems = imageNames.concat(imageNames);
const sliders = document.querySelectorAll(".slide-track");

sliders.forEach((slider, index) => {
  slider.innerHTML = ""; // Kosongkan isi slider sebelum menambahkan gambar

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "./assets/" + sliderItem; //path to your folder image
    img.className = "slide-item";
    slider.appendChild(img);
  });
});
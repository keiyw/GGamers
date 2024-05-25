const imageNames = ["carro.jpg", "terror.jpg", "educacional.jpg", "jogo-bike.jpg", "Jogo.jpg", "jogo-quiz.jpg", "RPG.jpg", "jopgo-fps.jpg", "jogo-luta.jpg", "jogo-quiz.jpg", "jogo-tiro.jpg", "jogo-cartas.jpg"];

const sliderItems = imageNames.concat(imageNames);
const sliders = document.querySelectorAll(".slide-track");

sliders.forEach((slider, index) => {
  slider.innerHTML = ""; // Esvazia o conteúdo do slider antes de adicionar imagens

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "./assets/" + sliderItem; // Caminho para a pasta de imagens
    img.className = "slide-item";
    slider.appendChild(img);
  });
});

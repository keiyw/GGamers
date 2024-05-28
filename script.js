const imageNames = ["carro.PNG", "terror.jpg", "educacional.PNG", "jogo-bike.jpg", "Jogo.jpg", "jogo-quiz.jpg", "cs.png", "jogo-cartas.jpg", "jogo-luta.jpg", "jogo-quiz.jng", "mario.PNG", "jogo-cartas.PNG"];

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

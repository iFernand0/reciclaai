

// MENU --------------------------------------------------
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav','fundo');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
 
//PONTOS E CUPONS ----------------------------------------
document.querySelectorAll(".cardP").forEach(cardP => {
  const texto = cardP.querySelector(".infoTroca");
  const original = texto.textContent
  const hover = texto.dataset.hover

  const mobile = window.matchMedia("(hover: none)").matches

  if(mobile){
     cardP.addEventListener("click", () => {
        texto.textContent =
        texto.textContent === original ? hover : original;
    });
  }
  
  cardP.addEventListener("mouseenter", () => {
    texto.textContent = hover
  });

  cardP.addEventListener("mouseleave", () => {
    texto.textContent = original
  });
});

const lightboxInit = (lightboxdiv, title) => {
  // crée les donnée HTML de la lightbox
  lightboxdiv.classList.add("lightBoxDiv");
  lightboxdiv.innerHTML = `
<button class="lightboxClose" aria-label="Close dialog" ></button>
<button class="lightboxNext "aria-label="Next image"></button>
<button class="lightboxPrev"aria-label="Previous image"></button>
<p class="titlePic">${title}</p>
`;
};

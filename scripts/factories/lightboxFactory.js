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

lightboxDOM = (
  data,
  whatData,
  title,
  lightBoxContainer,
  lightBox,
  lightboxdiv
) => {
  if (whatData == "img") {
    lightBoxContainer.innerHTML = `<img  src="${data.src}" alt="${title}">`;
  } else if (whatData == "vds") {
    lightBoxContainer.innerHTML = `<video controls='controls' src=${data.src} alt="${title}">`;
  }
  lightBox.appendChild(lightboxdiv);
  lightboxdiv.appendChild(lightBoxContainer);
};

changePicDom = (lightBoxContainer, lightboxdiv, name, nextEl) => {
  if (nextEl == name.link) {
    const titlepic = lightboxdiv.querySelector(".titlePic");
    titlepic.innerHTML = name.title;

    const extentionTypeNext = nextEl.split(".").pop();
    if (extentionTypeNext == "jpg") {
      lightBoxContainer.innerHTML = `<img  src="${nextEl}" alt="${name.title}" >`;
    } else if (extentionTypeNext == "mp4") {
      lightBoxContainer.innerHTML = `<video controls='controls' src="${nextEl}" alt="${name.title}">`;
    }
  }
};

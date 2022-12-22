const links = [];
const newlinks = [];

const lightbox = (data, whatData, title) => {
  // création et ouverture / fermeture de la lightbox
  const lightBox = document.querySelector(".lightBox");
  const lightboxdiv = document.createElement("div");
  lightboxInit(lightboxdiv, title);

  lightboxdiv
    .querySelector(".lightboxClose")
    .addEventListener("click", function closeModal() {
      this.parentElement.remove();
    });

  document.addEventListener("keyup", function onKeyup(e) {
    if (e.key === "Escape") {
      lightboxdiv.remove();
    }
  });

  const lightBoxContainer = document.createElement("div");
  lightBoxContainer.classList.add("lightBoxContainer");
  lightBoxContainer.setAttribute("aria-label", "image closeup view");
  addNextEventListeners(lightBoxContainer, lightboxdiv);
  addPrevEventListeners(lightBoxContainer, lightboxdiv);

  lightboxDOM(data, whatData, title, lightBoxContainer, lightBox, lightboxdiv);
};

const changePic = (lightBoxContainer, lightboxdiv, number) => {
  // gère le changement de photo
  return (e) => {
    const img = lightBoxContainer.children[0].src;
    let index = links.findIndex((i) => i === img);
    if (number > 0) {
      if (index === links.length - 1) {
        index = -1;
      }
    } else if (number < 0) {
      if (index === 0) {
        index = links.length;
      }
    }

    let nextEl = links[index + number]; // Affiche l'élément suivant
    nextEl = nextEl.split("5500/").pop();
    nextEl = localLink + nextEl;

    newlinks.forEach((name) => {
      changePicDom(lightBoxContainer, lightboxdiv, name, nextEl);
    });
  };
};

const addNextEventListeners = (lightBoxContainer, lightboxdiv) => {
  // écoute le clique ou la touche pour changé de photo dans la lightbox
  lightboxdiv
    .querySelector(".lightboxNext")
    .addEventListener("click", changePic(lightBoxContainer, lightboxdiv, 1));

  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowRight") {
      changePic(lightBoxContainer, lightboxdiv, 1)();
    }
  });
};

const addPrevEventListeners = (lightBoxContainer, lightboxdiv) => {
  // écoute le clique ou la touche pour changé de photo dans la lightbox
  lightboxdiv
    .querySelector(".lightboxPrev")
    .addEventListener("click", changePic(lightBoxContainer, lightboxdiv, -1));
  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      changePic(lightBoxContainer, lightboxdiv, -1)();
    }
  });
};

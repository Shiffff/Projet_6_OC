const links = [];
const newlinks = [];

const lightbox = (data, whatData, title) => {
  const lightBox = document.querySelector(".lightBox");
  const lightboxdiv = document.createElement("div");
  lightboxdiv.classList.add("lightBoxDiv");
  lightboxdiv.innerHTML = `
  <button class="lightboxClose"></button>
  <button class="lightboxNext "></button>
  <button class="lightboxPrev"></button>
  <p class="titlePic">${title}</p>
`;
  console.log(newlinks);
  const lightBoxContainer = document.createElement("div");
  lightBoxContainer.classList.add("lightBoxContainer");

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

  //************************************************ */

  lightboxdiv
    .querySelector(".lightboxNext")
    .addEventListener("click", function nextPic() {
      const img = lightBoxContainer.children[0].src;
      let index = links.findIndex((i) => i === img);
      if (index === links.length - 1) {
        index = -1;
      }

      const nextEl = links[index + 1];
      newlinks.forEach((name) => {
        if (nextEl == name.link) {
          const titlepic = lightboxdiv.querySelector(".titlePic");
          titlepic.innerHTML = name.title;
        }
      });
      const extentionTypeNext = nextEl.split(".").pop();
      if (extentionTypeNext == "jpg") {
        lightBoxContainer.innerHTML = `<img  src=${nextEl}>`;
      } else if (extentionTypeNext == "mp4") {
        lightBoxContainer.innerHTML = `<video controls='controls' src=${nextEl}>`;
      }
    });

  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowRight") {
      const img = lightBoxContainer.children[0].src;
      let index = links.findIndex((i) => i === img);
      if (index === links.length - 1) {
        index = -1;
      }

      const nextEl = links[index + 1];
      newlinks.forEach((name) => {
        if (nextEl == name.link) {
          const titlepic = lightboxdiv.querySelector(".titlePic");
          titlepic.innerHTML = name.title;
        }
      });
      const extentionTypeNext = nextEl.split(".").pop();
      if (extentionTypeNext == "jpg") {
        lightBoxContainer.innerHTML = `<img  src=${nextEl}>`;
      } else if (extentionTypeNext == "mp4") {
        lightBoxContainer.innerHTML = `<video controls='controls' src=${nextEl}>`;
      }
    }
  });

  lightboxdiv
    .querySelector(".lightboxPrev")
    .addEventListener("click", function prevPic() {
      const img = lightBoxContainer.children[0].src;
      let index = links.findIndex((i) => i === img);
      if (index === 0) {
        index = links.length;
      }
      const nextEl = links[index - 1];
      newlinks.forEach((name) => {
        if (nextEl == name.link) {
          const titlepic = lightboxdiv.querySelector(".titlePic");
          titlepic.innerHTML = name.title;
        }
      });
      const extentionTypeNext = nextEl.split(".").pop();
      if (extentionTypeNext == "jpg") {
        lightBoxContainer.innerHTML = `<img  src=${nextEl}>`;
      } else if (extentionTypeNext == "mp4") {
        lightBoxContainer.innerHTML = `<video controls='controls' src=${nextEl}>`;
      }
    });

  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      const img = lightBoxContainer.children[0].src;
      let index = links.findIndex((i) => i === img);
      if (index === 0) {
        index = links.length;
      }
      const nextEl = links[index - 1];
      newlinks.forEach((name) => {
        if (nextEl == name.link) {
          const titlepic = lightboxdiv.querySelector(".titlePic");
          titlepic.innerHTML = name.title;
        }
      });
      const extentionTypeNext = nextEl.split(".").pop();
      if (extentionTypeNext == "jpg") {
        lightBoxContainer.innerHTML = `<img  src=${nextEl}>`;
      } else if (extentionTypeNext == "mp4") {
        lightBoxContainer.innerHTML = `<video controls='controls' src=${nextEl}>`;
      }
    }
  });

  if (whatData == "img") {
    lightBoxContainer.innerHTML = `<img  src=${data.src}>`;
  } else if (whatData == "vds") {
    lightBoxContainer.innerHTML = `<video controls='controls' src=${data.src}>`;
  }
  lightBox.appendChild(lightboxdiv);
  lightboxdiv.appendChild(lightBoxContainer);
};
function mediaFactory(data) {
  // crée les donnée HTML pour les média
  const { price, date, likes, image, title, photographerId, id, video } = data;
  const picture = `assets/images/${photographerId}/${image}`;
  const videoSrc = `assets/images/${photographerId}/${video}`;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("pictureDiv");

    if (image) {
      const img = document.createElement("img");
      img.classList.add("viewData");
      img.addEventListener("click", function handleclick() {
        lightbox(img, "img", title);
      });

      img.setAttribute("src", picture);
      img.setAttribute("alt", title);

      article.appendChild(img);
      const obj = { link: `${localLink}${picture}`, title };
      newlinks.push(obj);

      links.push(`${localLink}${picture}`);
    } else if (video) {
      const vds = document.createElement("video");
      vds.classList.add("viewData");
      vds.addEventListener("click", function handleclick() {
        lightbox(vds, "vds", title);
      });
      vds.setAttribute("src", videoSrc);
      vds.setAttribute("alt", title);

      const obj = { link: `${localLink}${videoSrc}`, title };
      newlinks.push(obj);

      links.push(`${localLink}${videoSrc}`);

      article.appendChild(vds);
    }

    const picDiv = document.createElement("div");
    picDiv.classList.add("titlePicDiv");

    const titlePic = document.createElement("p");
    titlePic.textContent = title;
    const p = document.createElement("p");
    p.textContent = likes;
    const numberLike = document.createElement("div");
    numberLike.classList.add("numberLikeDiv");

    const icon = document.createElement("img");

    icon.setAttribute("src", "assets/icons/heart-fill-custom.svg");
    icon.setAttribute("alt", "Like Button");

    picDiv.appendChild(titlePic);
    numberLike.appendChild(p);
    numberLike.appendChild(icon);
    picDiv.appendChild(numberLike);

    article.appendChild(picDiv);

    return article;
  }

  return { getMediaCardDOM };
}

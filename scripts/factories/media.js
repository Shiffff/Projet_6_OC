function mediaFactory(data) {
  const { price, date, likes, image, title, photographerId, id, video } = data;
  const picture = `assets/images/${photographerId}/${image}`;
  const videoSrc = `assets/images/${photographerId}/${video}`;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("pictureDiv");

    if (image) {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      article.appendChild(img);
    } else if (video) {
      const vds = document.createElement("video");
      vds.setAttribute("src", videoSrc);
      article.appendChild(vds);
    }

    const picDiv = document.createElement("div");
    picDiv.classList.add("titlePicDiv");

    const titlePic = document.createElement("p");
    titlePic.textContent = title;
    const p = document.createElement("p");
    p.textContent = likes;
    const icon = document.createElement("img");

    icon.setAttribute("src", "assets/icons/heart-fill-custom.svg");

    picDiv.appendChild(titlePic);
    picDiv.appendChild(p);
    p.appendChild(icon);

    article.appendChild(picDiv);

    return article;
  }

  return { getMediaCardDOM };
}

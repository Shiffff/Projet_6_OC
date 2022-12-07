function mediaFactory(data) {
  const { price, date, likes, image, title, photographerId, id } = data;
  const picture = `assets/images/${photographerId}/${image}`;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("pictureDiv");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const picDiv = document.createElement("div");
    picDiv.classList.add("titlePicDiv");

    const titlePic = document.createElement("p");
    titlePic.textContent = title;
    const p = document.createElement("p");
    p.textContent = likes;
    const icon = document.createElement("img");

    icon.setAttribute("src", "assets/icons/heart-fill-custom.svg");

    article.appendChild(img);
    picDiv.appendChild(titlePic);
    picDiv.appendChild(p);
    p.appendChild(icon);

    article.appendChild(picDiv);

    return article;
  }

  return { getMediaCardDOM };
}

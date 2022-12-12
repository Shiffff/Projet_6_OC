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
      img.classList.add("viewData");
      img.addEventListener("click", function handleclick() {
        lightbox(img, "img", title);
      });

      img.setAttribute("src", picture);
      article.appendChild(img);
      const obj = { link: `http://127.0.0.1:5500/${picture}`, title: title };
      newlinks.push(obj);
      links.push(`http://127.0.0.1:5500/${picture}`);
    } else if (video) {
      const vds = document.createElement("video");
      vds.classList.add("viewData");
      vds.addEventListener("click", function handleclick() {
        lightbox(vds, "vds", title);
      });
      vds.setAttribute("src", videoSrc);
      const obj = { link: `http://127.0.0.1:5500/${videoSrc}`, title: title };
      newlinks.push(obj);

      links.push(`http://127.0.0.1:5500/${videoSrc}`);

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

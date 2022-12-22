function photographerFactory(data) {
  // crée les donnée HTML pour les photographe
  const { name, portrait, country, city, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const focusDiv = document.createElement("div");
    focusDiv.classList.add("focusDiv");
    const linkForPhotographer = document.createElement("a");
    linkForPhotographer.setAttribute("href", ` ../photographer.html?id=${id}`);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const citytext = document.createElement("p");
    citytext.textContent = city + ", " + country;
    citytext.classList.add("citytext");

    const p = document.createElement("p");
    p.textContent = tagline;

    const priceItem = document.createElement("p");
    priceItem.textContent = price + "€/jour";
    priceItem.classList.add("priceItem");

    focusDiv.appendChild(img);
    focusDiv.appendChild(h2);
    linkForPhotographer.appendChild(focusDiv);
    article.appendChild(linkForPhotographer);
    article.appendChild(citytext);
    article.appendChild(p);
    article.appendChild(priceItem);

    return article;
  }
  function getOneUserCardDOM() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    const locationText = document.createElement("p");
    locationText.classList.add("cityName");

    const h2Name = document.querySelector(".modal h2");
    h2Name.innerHTML = "Contactez-moi" + " " + name;

    locationText.textContent = city + "," + " " + country;
    const resumeText = document.createElement("p");
    resumeText.textContent = tagline;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    const photographpic = document.querySelector(".photographPic");
    photographpic.appendChild(img);

    descriptionDiv.appendChild(h1);
    descriptionDiv.appendChild(locationText);
    descriptionDiv.appendChild(resumeText);

    return descriptionDiv;
  }
  function makeEncartPrice() {
    const EncartDiv = document.createElement("div");
    EncartDiv.classList.add("EncartDiv");
    const EncartLikes = document.createElement("p");
    EncartLikes.classList.add("nbLikes");

    const iconHeart = document.createElement("img");
    iconHeart.setAttribute("src", "assets/icons/heart-fill-black.svg");
    iconHeart.setAttribute("alt", "LikesTotals");

    const EncartPrices = document.createElement("p");
    EncartPrices.textContent = price + "€" + "/" + "jour";

    EncartDiv.appendChild(EncartLikes);
    EncartDiv.appendChild(iconHeart);

    EncartDiv.appendChild(EncartPrices);

    return EncartDiv;
  }

  return { name, picture, getUserCardDOM, getOneUserCardDOM, makeEncartPrice };
}

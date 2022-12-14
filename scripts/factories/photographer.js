function photographerFactory(data) {
  const { name, portrait, country, city, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const clickOnDiv = () => {
      window.location.href = ` ../photographer.html?id=${id}`;
    };

    const article = document.createElement("article");
    const focusDiv = document.createElement("div");
    focusDiv.classList.add("focusDiv");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
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
    article.appendChild(focusDiv);
    article.appendChild(citytext);
    article.appendChild(p);
    article.appendChild(priceItem);

    focusDiv.addEventListener("click", clickOnDiv);

    return article;
  }
  function getOneUserCardDOM() {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    const locationText = document.createElement("p");
    locationText.classList.add("cityName");

    locationText.textContent = city + "," + " " + country;
    const resumeText = document.createElement("p");
    resumeText.textContent = tagline;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
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

    const EncartPrices = document.createElement("p");
    EncartPrices.textContent = price + "€" + "/" + "jour";

    EncartDiv.appendChild(EncartLikes);
    EncartDiv.appendChild(iconHeart);

    EncartDiv.appendChild(EncartPrices);

    return EncartDiv;
  }

  return { name, picture, getUserCardDOM, getOneUserCardDOM, makeEncartPrice };
}

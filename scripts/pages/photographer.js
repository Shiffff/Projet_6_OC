const params = new URLSearchParams(window.location.search);
const photographerID = params.get("id");

async function selectPhotographer(photographers) {
  const truePhotographer = photographers.filter(
    (photographer) => photographer.id == photographerID
  );
  return truePhotographer[0];
}
async function selectMedia(media) {
  const trueMedia = media.filter(
    (media) => media.photographerId == photographerID
  );
  return trueMedia;
}

async function displayData(photographers) {
  const photographHeader = document.querySelector(".photographDescription");
  const encartPrice = document.querySelector("#main");
  const photographerModel = photographerFactory(photographers);
  const userCardDOM = photographerModel.getOneUserCardDOM();
  const encartPriceDOM = photographerModel.makeEncartPrice();

  photographHeader.appendChild(userCardDOM);
  encartPrice.appendChild(encartPriceDOM);
}
async function displayMediaData(medias) {
  const displayMedia = document.querySelector(".displayMedia");
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();

    displayMedia.appendChild(mediaCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  const truePhotographer = await selectPhotographer(photographers);
  displayData(truePhotographer);
}

async function initMedia() {
  // Récupère les datas des photographes
  const { media } = await getPhotographers();
  const trueMedia = await selectMedia(media);
  displayMediaData(trueMedia);
  console.log(trueMedia);
  const likesArray = [];

  trueMedia.forEach((element) => {
    likesArray.push(element.likes);
  });
  const sum = likesArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  displayLikes(sum);
}

init();
initMedia();

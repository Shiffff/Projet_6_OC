const params = new URLSearchParams(window.location.search);
const photographerID = params.get("id");
const likesArray = [];
let trueMedia = [];

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
  console.log(trueMedia);

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
  displayMedia.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();

    mediaCardDOM
      .querySelector(".numberLikeDiv")
      .addEventListener("click", (e) => {
        if (media.isLiked === true) {
          media.likes--;
          media.isLiked = false;
        } else {
          media.likes++;
          media.isLiked = true;
        }
        mediaCardDOM.querySelector(".numberLikeDiv p").innerText = media.likes;
        letSum();
      });
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
  trueMedia = await selectMedia(media);

  const sortData = sortMedia(trueMedia);
  displayMediaData(sortData);

  const selectSort = document.querySelector("#sortSelect");
  selectSort.addEventListener("click", () => {
    const sortData = sortMedia(trueMedia);
    displayMediaData(sortData);
  });
  trueMedia.forEach((element) => {
    likesArray.push(element.likes);
  });
  letSum();
}

const letSum = () => {
  const sum = trueMedia.reduce((accumulator, value) => {
    return accumulator + value.likes;
  }, 0);
  displayLikes(sum);
};

init();
initMedia();

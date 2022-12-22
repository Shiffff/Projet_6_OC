const params = new URLSearchParams(window.location.search); // Récupére l'id du photographe en param
const photographerID = params.get("id");

async function selectPhotographer(photographers) {
  // séléctionne parmis l'array de tout les photographer le bon grace a l'ID
  const truePhotographer = photographers.filter(
    (photographer) => photographer.id == photographerID
  );
  return truePhotographer[0];
}
async function selectMedia(media) {
  // selectionne parmis l'array des media les bons media
  const trueMedia = media.filter(
    (media) => media.photographerId == photographerID
  );

  return trueMedia;
}

async function displayData(photographers) {
  // Appel la factory et construit l'HTML pour afficher les médias
  const photographHeader = document.querySelector(".photographDescription");
  const encartPrice = document.querySelector("#main");
  const photographerModel = photographerFactory(photographers);
  const userCardDOM = photographerModel.getOneUserCardDOM(); // crée l'encart avec toute les infos du photographe
  const encartPriceDOM = photographerModel.makeEncartPrice(); // Crée l'encart en bas a droite

  photographHeader.appendChild(userCardDOM);
  encartPrice.appendChild(encartPriceDOM);
}
async function displayMediaData(medias) {
  // appel la mediaFactory pour crée l'HTML et affiché les média
  const displayMedia = document.querySelector(".displayMedia");
  displayMedia.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();

    mediaCardDOM
      .querySelector(".numberLikeDiv")
      .addEventListener("click", (e) => {
        // Gére le systeme de like/unLike
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
  // appel getData pour récupéré la data du photographe puis selectphotographer pour séléctioné le bon
  // Récupère les datas des photographes
  const { photographers } = await getData();
  const truePhotographer = await selectPhotographer(photographers);
  displayData(truePhotographer); // ensuite display pour l'affiché
}

async function initMedia() {
  // Récupère les datas des photographes (différentes photo et vidéo)
  const { media } = await getData();
  trueMedia = await selectMedia(media);

  const initData = sortMedia(trueMedia, "Popularité"); // séléctionne la data a affiché par défault (par défault trié par popularité)
  displayMediaData(initData);

  options.addEventListener("click", (event) => {
    // écoute la séléction du systeme de trie et l'affiche en concéquence
    const targetName = event.target.value;
    const sortData = sortMedia(trueMedia, targetName);
    displayMediaData(sortData);
  });

  letSum(); // Calcule la somme des differents likes
}

const letSum = () => {
  const sum = trueMedia.reduce((accumulator, value) => {
    return accumulator + value.likes;
  }, 0);
  displayLikes(sum);
};

init();
initMedia();

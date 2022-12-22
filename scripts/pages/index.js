async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer); // Boucle sur le array précédament récupéré puis envoie les donnée de chaque photographer une par une
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getData(); // Cherche dans le fichier JSON la DATA et stock le array photographers dans la constance photographers
  displayData(photographers); // // Selectionne la section qui accueilera la DATA, puis appel la Factory pout crée l'HTML
}
init();

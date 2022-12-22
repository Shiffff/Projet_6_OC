async function getData() {
  // Appel les DATA dans le fichier JSON
  let url = "/data/photographers.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

const displayLikes = (sum) => {
  // Affiche la somme des likes dans l'encart en bas a droite
  const nblikestext = document.querySelector(".nbLikes");
  nblikestext.textContent = sum;
};

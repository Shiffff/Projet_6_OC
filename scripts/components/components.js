async function getPhotographers() {
  let url = "/data/photographers.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

const displayLikes = (sum) => {
  const nblikestext = document.querySelector(".nbLikes");
  const icon = document.createElement("img");
  icon.setAttribute("src", "assets/icons/heart-fill-black.svg");
  nblikestext.textContent = sum;
  nblikestext.appendChild(icon);
};

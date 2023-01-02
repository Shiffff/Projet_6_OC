const select = document.querySelector("#sortSelect");
const selected = select.querySelector(".selectedField");
const sortSelect = select.querySelector(".sortSelect");

const options = select.querySelector(".options");

document.addEventListener("click", (event) => {
  // ouvre et ferme le menu de trie
  if (!event.target.closest(".select")) {
    select.classList.remove("open");
    selected.nextElementSibling.className = "fas fa-chevron-down";
  }
});

select.addEventListener("click", () => {
  // ouvre et ferme le menu de trie
  select.classList.toggle("open");
  const selectedBtn = select.querySelector(".selected");

  if (selected.nextElementSibling.className == "fas fa-chevron-up") {
    selected.nextElementSibling.className = "fas fa-chevron-down";
    selectedBtn.style.borderRadius = "4px";
  } else {
    selected.nextElementSibling.className = "fas fa-chevron-up";
    selectedBtn.style.borderRadius = "4px 4px 0px 0px";
  }
});

class Popular {
  // Systeme de trie selont le fitlre séléctionné
  static supports(fitlerName) {
    return fitlerName === "Popularité";
  }
  static order(items) {
    return items.sort((a, b) => b.likes - a.likes);
  }
}

class Name {
  static supports(fitlerName) {
    return fitlerName === "Titre";
  }
  static order(items) {
    return items.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
}
class DateObj {
  static supports(fitlerName) {
    return fitlerName === "Date";
  }
  static order(items) {
    return items.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}

const filters = [Popular, Name, DateObj];

options.addEventListener("click", (event) => {
  const option = event.target;
  if (option.tagName === "BUTTON") {
    addOption(selected.textContent, option, options);
    selected.textContent = option.textContent;

    selected.nextElementSibling.className = "fas fa-chevron-down";
  }
});

const sortMedia = (trueMedia, targetName) => {
  // redonne les data dans l'ordre qui sera ensuite récupéré par la fonction displayData pour l'affiché
  for (const filter of filters)
    if (filter.supports(targetName)) {
      trueMedia = filter.order(trueMedia);
    }
  return trueMedia;
};

const contactbutton = document.querySelector(".contact_button");
contactbutton.setAttribute("aria-label", "Contact me");

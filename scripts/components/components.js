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
  nblikestext.textContent = sum;
};

class Popular {
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

const sortMedia = (trueMedia) => {
  const selectSort = document.querySelector("#sortSelect");
  for (const filter of filters)
    if (filter.supports(selectSort.value)) {
      trueMedia = filter.order(trueMedia);
    }
  return trueMedia;
};

const contactbutton = document.querySelector(".contact_button");
contactbutton.setAttribute("arialabel", "Contact me");

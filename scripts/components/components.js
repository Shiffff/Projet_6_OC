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
class Date {
  static supports(fitlerName) {
    return fitlerName === "Date";
  }
  static order(items) {
    return items.sort((a, b) => b.date - a.date);
  }
}

const filters = [Popular, Name, Date];

const sortMedia = (trueMedia) => {
  const selectSort = document.querySelector("#sortSelect");
  console.log(selectSort.value);
  for (const filter of filters)
    if (filter.supports(selectSort.value)) {
      trueMedia = filter.order(trueMedia);
    }
  return trueMedia;
};

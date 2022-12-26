const htmlElement = document.documentElement;

function displayModal() {
  const modal = document.getElementById("contact_modal");
  const bground = document.querySelector(".bground");
  modal.style.display = "block";
  bground.style.display = "block";
  htmlElement.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const bground = document.querySelector(".bground");
  modal.style.display = "none";
  bground.style.display = "none";
  htmlElement.style.overflow = "visible";
}

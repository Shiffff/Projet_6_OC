function displayModal() {
  const modal = document.getElementById("contact_modal");
  const bground = document.querySelector(".bground");
  modal.style.display = "block";
  bground.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const bground = document.querySelector(".bground");
  modal.style.display = "none";
  bground.style.display = "none";
}

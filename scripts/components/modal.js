const ErrorFirstName = document.querySelector(".ErrorFirstName");
const ErrorLastName = document.querySelector(".ErrorLastName");
const ErrorEmail = document.querySelector(".ErrorEmail");
const form = document.querySelector("form"); // Select the form
const modal = document.getElementById("contact_modal");
const bground = document.querySelector(".bground");

let readyToSent = [];

const regExpName = new RegExp( // Regexp for control the field of form
  "^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$",
  "i"
);
const regExpEmail = new RegExp(
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
  "g"
);

const regExpMessage = new RegExp("[0-9a-zA-Z]{2,}");

const formArray = [
  // Create an array of object for stock differents param of each field
  {
    el: form.firstName, //Select form field
    name: "Prénom",
    // select the right message
    errorMessage:
      "Le prénom doit comporter au moins deux lettres (caractères spéciaux et chiffre non autorisé)",
    regExp: regExpName, // Use the regexp
    listenerMethod: "change",
  },
  {
    el: form.lastName,
    name: "Nom",
    errorMessage:
      "Le nom doit comporter au moins deux lettres (caractères spéciaux et chiffre non autorisé)",
    regExp: regExpName,
    listenerMethod: "change",
  },
  {
    el: form.email,
    name: "Email",
    errorMessage: "Veuillez entrer une adresse électronique valide.",
    regExp: regExpEmail,

    listenerMethod: "change",
  },
  {
    el: form.TextMessage,
    name: "Message",
    errorMessage: "Le message doit comporter au moins deux lettres.",
    regExp: regExpMessage,

    listenerMethod: "change",
  },
];
const handleInput = (obj) => {
  // create one function for control each field of form (exept Radio button) on "Change" listenerMethod

  obj.el.addEventListener(obj.listenerMethod, function () {
    // Choice listener methode (change)
    const errorMessage = obj.el.parentNode.querySelector(".errorMessage"); // select the parent element for select each error message field
    if (obj.regExp) {
      // If there is a regexp field on "[inputName]" object
      const testFirst = obj.regExp.test(obj.el.value); // test with the right regexp
      obj.valid = testFirst === true; // if the regexp OK

      if (obj.valid === true) {
        // create a new field valid on "[inputName]" object if the regexp OK
        obj.el.classList.remove("errorMessageName"); // remove the errorMessage class if is it
        errorMessage.innerText = ""; // and remove the message
        return true;
      } else {
        // When the value doesn't pass the regexp
        errorMessage.innerText = obj.errorMessage; // Write error message in the error class

        obj.el.classList.add("errorMessageName"); // And add error class for create a red border
        return false;
      }
    }
  });
};
const handleSubmit = (obj) => {
  // create one function for control each field of form  on "Submit" listenerMethod
  const errorMessage = obj.el.parentNode.querySelector(".errorMessage"); // select the parent element for select each error message field

  if (obj.valid === true) {
    // If there is a field valid = true, on [inputname] array
    errorMessage.innerText = ""; // supr the error message
    const newObj = { [obj.name]: obj.el.value }; // and create a new object with name and value of field

    readyToSent.push(newObj); // and send each object to [readyToSent] array
  } else {
    errorMessage.innerText = obj.errorMessage; // otherwise write the right error message
  }
};

formArray.forEach(handleInput);

form.addEventListener("submit", function (e) {
  // On submit
  e.preventDefault(); // don't refresh the page
  formArray.forEach(handleSubmit); // And call the handleSubmit function for each element of inputname array
  if (readyToSent.length == 4) {
    // If the object contain 7 or more object, console log "readyToSent" array and valid the form (call modal confirmation
    console.log(readyToSent);
    launchModalConfirmation();
  } else {
    readyToSent = []; // otherwise clean the array
  }
});

const launchModalConfirmation = () => {
  // Show the modal confirmation
  modal.style.display = "none";
  bground.style.display = "none";
};

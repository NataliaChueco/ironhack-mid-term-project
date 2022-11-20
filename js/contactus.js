const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const fullNameField = document.getElementById("fname");
  let valid = true;

  if (!fullNameField.value) {
    const alert = document.getElementById("alert");
    
    alert.classList.add("visible");
    alert.setAttribute("aria-hidden", false);
    alert.setAttribute("aria-invalid", true);
    
  }
  return valid;
}
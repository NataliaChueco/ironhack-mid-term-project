const submit = document.getElementById("submit");
const closebtn = document.getElementsByClassName("closebtn");


submit.addEventListener("click", notifyFields);


function notifyFields(e) {
  e.preventDefault();

  const fullNameField = document.getElementById("fname");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");

  let generalNotification = false;
  if (!fullNameField.value || !emailField.value || !phoneField.value ) {
    showErrorAlert("alert");
    generalNotification = true;
  }

  else{
    showErrorAlert("submit");
  }

  if (!generalNotification && !validateEmail(emailField)){
    showErrorAlert("errorEmail");
  }
  else if(!generalNotification && !validatePhoneNumber(phoneField)){
    showErrorAlert("errorPhone");
  }

  const inputs = document.querySelectorAll('#fname, #email, #phone' );

  inputs.forEach(input => {
    input.value = '';
  });
}



function validateEmail(mail){ 
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
    {
      return true;
    }
      console.log("You have entered an invalid email address!");
      return false;
}

function validatePhoneNumber(phone) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phone);
}

function showErrorAlert(id){
  const alert = document.getElementById(id);
  alert.style.display = "block";
  alert.setAttribute("aria-hidden", false);
  alert.setAttribute("aria-invalid", true);
}

function closeAlert(id){
  const alert = document.getElementById(id);
 alert.parentNode.style.display = "none";
  
}
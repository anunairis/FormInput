const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const button = document.getElementById("btn");
const form = document.getElementById("form-container");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-input error";
  const small = formControl.querySelector(".small");
  small.innerText = message;
}
// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-input success";
}


// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}


// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.trim() === "") {
    showError(input, `${getFieldName(input)} is required`);
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}


form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([name, email, phone]);
  checkLength(name, 3, 15);
  checkEmail(email);
});


// ---- USING IF STATEMENTS -----
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (name.value === "") {
//     showError(name, "Name is required");
//   } else {
//     showSuccess(name);
//   }
//   //_____________________________________________
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else {
//     showSuccess(email);
//   }
//   //_____________________________________________
//   if (phone.value === "") {
//     showError(phone, "Phone number is required");
//   } else {
//     showSuccess(phone);
//   }
// });















// ______ OLD WAY OF LOTS OF IF STATEMENTS _______
// BUTTON EVENTS
// button.addEventListener("click", submit);
// button.addEventListener("click", validateEmail);
// button.addEventListener("click", validateName);
// button.addEventListener("click", validatePhone);
// ________________________________________________

//// USERNAME VERIFICATION
// function validateName(name) {
//   var name = document.getElementById("name");
//   var outputName = name.value;
//   if (outputName === "" || !name) {
//     document.getElementById("nameOutput").innerHTML = "Please enter a name!";
//     document.getElementById("nameOutput").style.color = "red";
//   } else if (outputName.length < 2 || outputName.length > 25) {
//     document.getElementById("nameOutput").innerHTML =
//       "The name has a wrong length!";
//     document.getElementById("nameOutput").style.color = "red";
//   }
// }

//// EMAIL VERIFICATION
// function validateEmail(email) {
//   var email = document.getElementById("email");
//   var outputEmail = email.value;
//   let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (outputEmail.match(mailformat)) {
//     document.getElementById("emailOutput").innerHTML =
//       "Your email: " + outputEmail;
//   } else {
//     document.getElementById("emailOutput").innerHTML =
//       "Please enter a valid e-mail!";
//     document.getElementById("emailOutput").style.color = "red";
//   }
// }

//// PHONE VERIFICATION
// function validatePhone(phone) {
//   var phone = document.getElementById("phone");
//   var outputPhone = phone.value;
//   var phoneno = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
//   if (outputPhone.match(phoneno)) {
//     document.getElementById("phoneOutput").innerHTML =
//       "Your phone number: " + outputPhone;
//   } else if (outputPhone === "") {
//     document.getElementById("phoneOutput").innerHTML = "Please enter a valid phone number!";
//     document.getElementById("phoneOutput").style.color = "red";
//   } else {
//     document.getElementById("phoneOutput").innerHTML =
//       "Please enter a valid phone number!";
//     document.getElementById("phoneOutput").style.color = "red";
//   }
// }
// _______________________________________________

// function validate(email) {
//   var x = document.myform.email.value;
//   const atposition = email.indexOf("@");
//   const dotposition = email.lastIndexOf(".");
//   if (atposition<1 || dotposition<atposition+2 || dotposition+2>= x.length) {
//     document.getElementById("output").innerHTML =
//       "Please enter a valid e-mail!";
//     return false;};
// };

//// EMAIL VERIFICATION
// function validate(email) {
//   var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//   if (email.match(mailformat)) {
//     return true;
//   } else {
//     alert("You have entered an invalid email address!");
//     return false;}
// };
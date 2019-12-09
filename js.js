const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const button = document.getElementById("btn");
const textOutput = document.getElementById("output");

// BUTTON EVENTS
// button.addEventListener("click", submit);
button.addEventListener("click", validateEmail);
button.addEventListener("click", validateName);
button.addEventListener("click", validatePhone);
// button.addEventListener("click", outputText);
// ________________________________________________

//// USERNAME VERIFICATION
function validateName(name) {
  var name = document.getElementById("name");
  var outputName = name.value;
  if (outputName === "" || !name) {
    document.getElementById("nameOutput").innerHTML = "Please enter a name!";
    document.getElementById("nameOutput").style.color = "red";
  } else if (outputName.length < 2 || outputName.length > 25) {
    document.getElementById("nameOutput").innerHTML =
      "The name has a wrong length!";
    document.getElementById("nameOutput").style.color = "red";
  } else {
    document.getElementById("nameOutput").innerHTML =
      "Your name: " + outputName;
  }
}

//// EMAIL VERIFICATION
function validateEmail(email) {
  var email = document.getElementById("email");
  var outputEmail = email.value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (outputEmail.match(mailformat)) {
    document.getElementById("emailOutput").innerHTML =
      "Your email: " + outputEmail;
  } else {
    document.getElementById("emailOutput").innerHTML =
      "Please enter a valid e-mail!";
    document.getElementById("emailOutput").style.color = "red";
  }
}

//// PHONE VERIFICATION
function validatePhone(phone) {
  var phone = document.getElementById("phone");
  var outputPhone = phone.value;
  var phoneno = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (outputPhone.match(phoneno)) {
    document.getElementById("phoneOutput").innerHTML =
      "Your phone number: " + outputPhone;
  } else if (outputPhone === "") {
    document.getElementById("phoneOutput").innerHTML = "Please enter a valid phone number!";
    document.getElementById("phoneOutput").style.color = "red";
  }
  else {
    document.getElementById("phoneOutput").innerHTML =
      "Please enter a valid phone number!";
    document.getElementById("phoneOutput").style.color = "red";
  }
}
// _______________________________________________

//// PHONE VERIFICATION
// function validatePhone(phone) {
//   var phone = document.getElementById("phone");
//   var outputPhone = phone.value;
//   // var stripped = outputPhone.replace(/[\(\)\.\-\ ]/g, '');
//   if (outputPhone.value == "") {
//     document.getElementById("phoneOutput").innerHTML =
//       "Please enter a phone number!";
//   } else {
//     document.getElementById("phoneOutput").innerHTML =
//     "Your phone number: " + outputPhone;
//   }
// }

//// to output the form input
// function outputText() {
//   var name = document.getElementById("name");
//   var nameOutput = name.value;
//   var email = document.getElementById("email");
//   var emailOutput = email.value;
//   const phone = document.getElementById("phone");
//   const phoneOutput = phone.value;

//   validate(emailOutput);

//   document.getElementById("output").innerHTML = "Hei, " + nameOutput + ". Make sure your data is correct: email: " + emailOutput + ", phone: " + phoneOutput + ".";
// };

// TEST
button.addEventListener("click", function test() {
  document.getElementById("demo").style.backgroundColor = "blue";
});

// function validate(email) {
//   var x = document.myform.email.value;
//   const atposition = email.indexOf("@");
//   const dotposition = email.lastIndexOf(".");
//   if (atposition<1 || dotposition<atposition+2 || dotposition+2>= x.length) {
//     document.getElementById("output").innerHTML =
//       "Please enter a valid e-mail!";
//     return false;};
// };

//// 4.EMAIL VERIFICATION
// function validate(email) {
//   var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//   if (email.match(mailformat)) {
//     return true;
//   } else {
//     alert("You have entered an invalid email address!");
//     return false;}
// };

//// 6. clears form on submit
// function submit(e) {e.preventDefault();
//   document.forms["myform"].reset();
//   let input = document.querySelector("input");
//   input.value = "";};

//// 7. email id must contain the @ and . character
// //There must be at least one character before and after the @.
// //There must be at least two characters after . (dot).

// 2.EMAIL VERIFICATION / DOESNT WORK
// document.getElementById("btn").addEventListener("click", function  submit(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// });

// 3.EMAIL VERIFICATION / DOESNT WORK
// function  submit(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

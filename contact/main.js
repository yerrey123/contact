// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2isP5FhYhmfwrciXsKLkd58uKncfM6PE",
  authDomain: "contactform-e50bb.firebaseapp.com",
  databaseURL: "https://contactform-e50bb.firebaseio.com",
  projectId: "contactform-e50bb",
  storageBucket: "contactform-e50bb.appspot.com",
  messagingSenderId: "246148344061"
};
firebase.initializeApp(config);

//reference messages collection

var messagesRef = firebase.database().ref("messages");

//Listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();
  //get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");
  //save message
  saveMessage(name, company, email, phone, message);

  //show alert

  document.querySelector(".alert").style.display = "block";

  // hide alert after 3sec

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}
// Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save the message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    comapny: company,
    email: email,
    phone: phone,
    message: message
  });
}

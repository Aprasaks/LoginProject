const useridInput = document.getElementById("userid");

useridInput.addEventListener("input", () => {
  useridInput.value = useridInput.value.replace(/[^a-zA-Z0-9]/g, "");
});
// replace(...,"") ... to ""(erase)
// ^ except
// a-z small Alphabet
// A-Z big Alphabet
// 0-9 number

const pwInput = document.getElementById("userpw");
const togglePw = document.getElementById("togglePassword");

togglePw.addEventListener("click", () => {
  const isHidden = pwInput.type === "password";
  pwInput.type = isHidden ? " text" : "password";
  togglePw.textContent = isHidden ? "🙈" : "👁️";
});

console.log("pwInput:", pwInput); // null이면 못 찾은 거!
console.log("togglePw:", togglePw);

//loginForm submit event
const loginForm = document.getElementById("loginForm");
const rememberCheckbox = document.getElementById("rememberID");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default

  const enteredID = useridInput.value.trim();
  const enteredPW = pwInput.value.trim();

  //must JSON exist up and down on sign in and out
  const users = JSON.parse(localStorage.getItem("users")) || [];

  //loading saved users match
  const matchedUser = users.find((user) => user.id === enteredID && user.pw === enteredPW);

  //login result
  if (matchedUser) {
    alert(`Hello, ${matchedUser.id}`);
  } else {
    alert("userid and password is not valid");
  }

  //   if (useridInput.value === "" || pwInput.value === "") {
  //     alert("Please enter your id and password");
  //     return;
  //   }

  //   if (rememberCheckbox.checked) {
  //     localStorage.setItem("savedUserID", useridInput.value);
  //   } else {
  //     localStorage.removeItem("savedUserID");
  //   }
  //   alert("Login success");
});

//page open and checkbox true
const savedID = localStorage.getItem("savedUserID");
if (savedID) {
  useridInput.value = savedID;
  rememberCheckbox.checked = true;
}

const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

showRegister.addEventListener("click", () => {
  loginForm.style.display = "none"; //registerForm.style.display ="none" -> <form id="registerForm" style="display: none;">
  registerForm.style.display = "block";
});

showLogin.addEventListener("click", () => {
  registerForm.style.display = "none"; //hide
  loginForm.style.display = "block"; //show
});

//Valid
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("registerID").value.trim();
  const pw = document.getElementById("registerPW").value.trim();
  const pwConfirm = document.getElementById("registerPWConfirm").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();

  //confirm all elements
  if (!id || !pw || !pwConfirm || !phone) {
    alert("please enter all elements");
    return;
  }

  //pwConfirm
  if (pw !== pwConfirm) {
    //!== value and type(all)
    alert("password do not match");
    return;
  }
  //signup and localstorage saved
  const users = JSON.parse(localStorage.getItem("users")) || [];

  //new sign up
  const newUser = {
    id: id,
    pw: pw,
    phone: phone,
  };

  //userid duplicate
  const isDuplicate = users.some((user) => user.id === id);
  if (isDuplicate) {
    alert("userid is not valid");
    return;
  }

  //plus Array and save
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  //all complete
  alert("Signup complete!");

  //form default and transform
  registerForm.reset();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

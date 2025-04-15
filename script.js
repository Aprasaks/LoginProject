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

  if (useridInput.value === "" || pwInput.value === "") {
    alert("Please enter your id and password");
    return;
  }

  if (rememberCheckbox.checked) {
    localStorage.setItem("savedUserID", useridInput.value);
  } else {
    localStorage.removeItem("savedUserID");
  }
  alert("Login success");
});

//page open
const savedID = localStorage.getItem("savedUserID");
if (savedID) {
  useridInput.value = savedID;
  rememberCheckbox.checked = true;
}

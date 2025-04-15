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

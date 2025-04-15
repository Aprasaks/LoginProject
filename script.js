const useridInput = document.getElementById("userid");

useridInput.addEventListener("input", () => {
  useridInput.value = useridInput.value.replace(/[^a-zA-Z0-9]/g, "");
});
// replace(...,"") ... to ""(erase)
// ^ except
// a-z small Alphabet
// A-Z big Alphabet
// 0-9 number

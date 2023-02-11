const open = document.querySelector(".share");
const close = document.querySelector(".share-active");
const author = document.querySelector(".author");

console.log(open, close, author);

open.addEventListener("click", () => {
  author.classList.toggle("active");
});

close.addEventListener("click", () => {
  author.classList.remove("active");
});

const rewiewsForm = document.querySelector(".modal - form");
rewiewsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.name);
});

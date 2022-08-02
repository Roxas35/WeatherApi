const form = document.querySelector("form");
const city = document.querySelector("#city");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.location.href=`/temperature/${city.value}`;
});
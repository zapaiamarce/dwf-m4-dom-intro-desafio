function main() {
  const newLiEl = document.createElement("li");
  newLiEl.textContent = "Soy un li creado desde Javascript";

  const listaEl = document.querySelector(".lista");
  listaEl.appendChild(newLiEl);

  setTimeout(function () {
    newLiEl.textContent = "otro texto";
  }, 3000);
}

main();

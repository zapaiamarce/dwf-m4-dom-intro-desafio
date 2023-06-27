const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listEl = document.querySelector(".lista");

  // Remover todos los elementos <li> existentes
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }

  for (let { tema, class: itemClass } of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = tema;
    newLiEl.classList.add(itemClass || "item");
    console.log(newLiEl);

    listEl.appendChild(newLiEl);
  }
}


main();

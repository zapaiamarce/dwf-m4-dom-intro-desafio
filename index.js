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
  const itemsEls = document.querySelectorAll(".lista li");

  for (let el of itemsEls) {
    el.remove()
  }
  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    newLiEl.classList.add(item.class || "item");
    console.log(newLiEl);

    listEl.appendChild(newLiEl)
  }
}

main();

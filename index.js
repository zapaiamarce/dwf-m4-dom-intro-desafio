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
  const listaEl = document.querySelector(".lista");
  const listaEls = document.querySelectorAll(".lista li");

  for (var el of listaEls) {
    el.remove();
  }

  for (var item of cosasQueAprendimos) {
    const addNewLiEl = document.createElement("li");
    addNewLiEl.textContent = item.tema;
    const claseQueSeAsignaAlLi = item.class || "item"
    addNewLiEl.classList.add(claseQueSeAsignaAlLi);
    

    listaEl.appendChild(addNewLiEl);
    
  }
}

main();

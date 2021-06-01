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
  const ulEl = document.querySelector(".lista");
  ulEl.innerHTML= '';
  for (var i=0; i<cosasQueAprendimos.length ; i++){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(cosasQueAprendimos[i].tema));
    if(cosasQueAprendimos[i].class)
      li.classList.add(cosasQueAprendimos[i].class);
    ulEl.appendChild(li);
  }
}

main();

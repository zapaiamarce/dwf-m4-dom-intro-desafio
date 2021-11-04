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
  const childColl = document.querySelectorAll(".lista li")
  childColl.forEach(child=>ulEl.removeChild(child))
  cosasQueAprendimos.forEach(obj=>{
    const newLiEl = document.createElement("li");
    newLiEl.textContent = obj.tema;
   if(obj.class) {newLiEl.classList.add(obj.class)};
    ulEl.appendChild(newLiEl);
  })
    

  
}

main();

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// première methode:

window.addEventListener("mousemove", (e) => {
  cercle1.style.top = e.y + "px";
  cercle1.style.left = e.x + "px";

  cercle2.style.top = e.y + "px";
  cercle2.style.left = e.x + "px";

  cercle3.style.top = e.y + "px";
  cercle3.style.left = e.x + "px";
});

// deuxieme methode: il faudra voir pourquoi elle ne marche pas
// const mouses = document.querySelector(".mouses");

// window.addEventListener("mousemove", (e) => {
//   mouses.forEach((cercle) => {
//     cercle.style.top = e.y + "px";
//     cercle.style.left = e.x + "px";
//   });
// });

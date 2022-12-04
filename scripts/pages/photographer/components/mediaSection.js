// import mediaCard from "./mediaCard.js";

// // Mettre le code JavaScript lié à la page photographer.html

// const mediaSection = (photographerMedias) => {
//    console.log(photographerMedias);
//    let sort;
//    setTimeout(() => {
//       console.log("load");
//       sortSelect.addEventListener("change", () => {
//          sort = sortSelect.value;

//          console.log(sortSelect.value);
//          console.log(document.querySelector(".photograph-medias"));
//          document.querySelectorAll(".media-card").forEach((card) => {
//             card.remove();
//          });
//          mediaCardContainer.innerHTML += mediaCard(photographerMedias, sort);
//       });
//    }, 0);
//    return ` <section class="photograph-medias">
//           <div class="sort-select-container">
//              <label class="sort-select-label" for="sortSelect">Trier par</label>
//             <select id="sortSelect" class="sort-select" name="test">
//                <option value="popularity" class="sort-select-option">Popularité</option>
//                <option value="date" class="sort-select-option">Date</option>
//                <option value="title" class="sort-select-option">Titre</option>
//              </select>
//            </div>
//            <div class="media-card-container" id="mediaCardContainer">
//            ${mediaCard(photographerMedias, sort)}
//            </div>
//    </section>`;
// };

// export default mediaSection;

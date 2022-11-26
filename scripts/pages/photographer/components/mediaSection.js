import mediaCard from "./mediaCard.js";

// Mettre le code JavaScript lié à la page photographer.html

const mediaSection = (photographerMedias) => {
   return ` <section class="photograph-medias">
          <div class="sort-select-container">
             <label class="" for="sort-select-label">Trier par</label>
            <select id="sortSelect" class="sort-select" name="test">
               <option value="popularity" class="sort-select-option">Popularité</option>
               <option value="date" class="sort-select-option">Date</option>
               <option value="title" class="sort-select-option">Titre</option>
             </select>
           </div>
           <div class="media-card-container" id="mediaCardContainer">
           ${mediaCard(photographerMedias)}
           </div>
   </section>`;
};

export default mediaSection;

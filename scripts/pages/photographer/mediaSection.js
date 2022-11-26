// Mettre le code JavaScript lié à la page photographer.html

function photographerMediaFactory(photographerMedias) {
   const src = `assets/photographers/`;
   // const sortByPopularity = a.likes - b.likes;
   // const sortByDate = new Date(a.date) - new Date(b.date);
   // const sortByTitle = a.title.toString().localeCompare(b.title.toString());
   const getMediaPhotographerDOM = () => {
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
           ${loopMedia(photographerMedias)}
           </div>
   </section>`;
   };

   // Return result of getMediaPhotographerDOM
   return { getMediaPhotographerDOM };
}

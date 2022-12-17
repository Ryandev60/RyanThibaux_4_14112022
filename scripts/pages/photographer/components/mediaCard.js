const mediaCard = (selectedMedias, sort) => {
   // Src of picture

   const src = `assets/photographers/`;

   // Counter

   let cardCounter = 0;
   let likeCounter = 0;
   let heartCounter = 0;

   // Return

   return selectedMedias
      .sort((a, b) => {
         if (sort === "date") {
            return new Date(a.date) - new Date(b.date);
         } else if (sort === "title") {
            return a.title.toString().localeCompare(b.title.toString());
         } else {
            return b.likes - a.likes;
         }
      })
      .map((media) => {
         return `
 <article class="media-card">
     <div class="media-card-top">
        ${
           media.image
              ? `<img tabindex="0" src=${`${src}/${media.photographerId}/${media.image}`} alt="${
                   media.title
                },appuyer sur entrée pour ouvrir ce média dans la lightbox"
                class="media card-number-${cardCounter++}">`
              : `<video tabindex="0" controls title="${
                   media.title
                }, appuyer sur entrée pour afficher ce média dans la lightbox" class="media card-number-${cardCounter++}">
           <source src=${`${src}/${media.photographerId}/${media.video}`} type="video/mp4">
        </video>`
        }
     </div>
     <div class="media-card-bottom">
        <h2 lang="en-GB" aria-label="${media.title}" tabindex="0" class="media-card-title">${
            media.title
         }</h2>
        <div class="media-card-bottom-right">
           <p aria-label="${media.likes} j'aime pour le média ${
            media.title
         }" tabindex="0" class="media-card-likes like-number-${likeCounter++}">${media.likes}
           </p>
           <i aria-label="Appuyer sur entrée pour indiquer que vous aimez le media ${
              media.title
           }" tabindex="0" class="fa-solid fa-heart heart heart-number-${heartCounter++}"></i>
        </div>
     </div>
  </article>`;
      })
      .join("");
};

export default mediaCard;

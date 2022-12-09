const mediaCard = (selectedMedias, sort) => {
   const src = `assets/photographers/`;
   // Once the dom is loaded,
   // we apply an event listener to the input select
   let cardCounter = 0;
   let likeCounter = 0;
   let heartCounter = 0;
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
         return `<div class="media-card">
           <div class="media-card-top">
           ${
              media.image
                 ? `<img tabindex="0" src = ${`${src}/${media.photographerId}/${media.image}`} alt="${
                      media.title
                   }" class="media card-number-${cardCounter++}">`
                 : `<video tabindex="0" controls title="${
                      media.title
                   }" class="media" card-number-${cardCounter++}">
                  <source src = ${`${src}/${media.photographerId}/${media.video}`} type="video/mp4">
                 </video>`
           }
           </div>
           <div class="media-card-bottom">
           <p lang="en-GB" aria-label="${
              media.title
           }" tabindex="0" class="media-card-title">${media.title}</p>
           <div class="media-card-bottom-right">
           <p aria-label="${media.likes} j'aime pour le média ${
            media.title
         }" tabindex="0" class="media-card-likes like-number-${likeCounter++}">${
            media.likes
         }</p>
         <i aria-label="Appuyer sur entrée pour indiquer que vous aimez le media ${
            media.title
         }" tabindex="0" class="fa-solid fa-heart heart heart-number-${heartCounter++}"></i>
         </div>
           </div>
           </div>`;
      })
      .join("");
};

export default mediaCard;

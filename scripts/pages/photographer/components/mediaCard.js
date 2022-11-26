const mediaCard = (array, sort) => {
   const src = `assets/photographers/`;

   // Once the dom is loaded,
   // we apply an event listener to the input select
   window.onload = () => {
      sortSelect.addEventListener("change", () => {
         console.log(sortSelect.value);
         console.log(document.querySelector(".photograph-medias"));
         document.querySelectorAll(".media-card").forEach((card) => {
            card.remove();
         });
         mediaCardContainer.innerHTML += mediaCard(array, sortSelect.value);
      });
   };

   return array
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
                 ? `<img src = ${`${src}/${media.photographerId}/${media.image}`}>`
                 : `<video controls>
                  <source src = ${`${src}/${media.photographerId}/${media.video}`} type="video/mp4">
                 </video>`
           }
           </div>
           <div class="media-card-bottom">
           <p class="media-card-title">${media.title}</p>
           <p class="media-card-likes">${media.likes}<i class="fa-solid fa-heart"></i></p>
           </div>
           </div>`;
      })
      .join("");
};

export default mediaCard;

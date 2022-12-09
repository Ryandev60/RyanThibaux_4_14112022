const displayLightbox = (allMedias) => {
   const src = `assets/photographers/`;
   let numberOfMedia;
   let selectedMedia;

   const beforeMedia = () => {
      if (numberOfMedia > 0) {
         numberOfMedia--;
         selectedMedia = allMedias[numberOfMedia];

         if (selectedMedia.image) {
            lightboxData.innerHTML = ` 
           <img src="${src}/${selectedMedia.photographerId}/${selectedMedia.image}" alt ="${selectedMedia.title}"></img>
           <p>${selectedMedia.title}</p>
        `;
         } else {
            lightboxData.innerHTML = `
           <video controls="" title="${selectedMedia.title}">
                 <source src="${src}/${selectedMedia.photographerId}/${selectedMedia.video}" type="video/mp4">
           </video>
           <p>${selectedMedia.title}</p>
           `;
         }
      }
   };

   const nextMedia = () => {
      if (numberOfMedia < allMedias.length - 1) {
         console.log(numberOfMedia);
         numberOfMedia++;
         selectedMedia = allMedias[numberOfMedia];

         if (selectedMedia.image) {
            lightboxData.innerHTML = ` 
           <img src="${src}/${selectedMedia.photographerId}/${selectedMedia.image}" alt ="${selectedMedia.title}"></img>
           <p>${selectedMedia.title}</p>
        `;
         } else {
            lightboxData.innerHTML = `
           <video controls="" title="${selectedMedia.title}">
                 <source src="${src}/${selectedMedia.photographerId}/${selectedMedia.video}" type="video/mp4">
           </video>
           <p>${selectedMedia.title}</p>
           `;
         }
      }
   };

   const closeLightbox = () => {
      lightboxDom.style.display = "none";
   };

   // addEventListener

   document.querySelectorAll(".media-card-top").forEach((cardTop) => {
      cardTop.addEventListener("click", () => {
         numberOfMedia = Number(
            cardTop.classList[1].replace("card-number-", "")
         );
         selectedMedia = allMedias[numberOfMedia];

         if (selectedMedia.image) {
            lightboxData.innerHTML = ` 
            <img src="${src}/${selectedMedia.photographerId}/${selectedMedia.image}" alt ="${selectedMedia.title}"></img>
            <p>${selectedMedia.title}</p>
         `;
         } else {
            lightboxData.innerHTML = `
            <video controls="" title="${selectedMedia.title}">
                  <source src="${src}/${selectedMedia.photographerId}/${selectedMedia.video}" type="video/mp4">
            </video>
            <p>${selectedMedia.title}</p>
            `;
         }

         lightboxDom.style.display = "flex";
      });
   });

   arrowLeftLightbox.addEventListener("click", () => {
      beforeMedia();
   });

   arrowRightLightbox.addEventListener("click", () => {
      nextMedia();
   });

   crossLightbox.addEventListener("click", () => {
      closeLightbox();
   });

   addEventListener("keydown", (e) => {
      if (lightboxDom.style.display === "flex" && e.key === "ArrowRight") {
         nextMedia();
      }

      if (lightboxDom.style.display === "flex" && e.key === "ArrowLeft") {
         beforeMedia();
      }

      if (lightboxDom.style.display === "flex" && e.key === "Escape") {
         closeLightbox();
      }
   });
};

export default displayLightbox;

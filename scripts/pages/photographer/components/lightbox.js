const displayLightbox = (allMedias) => {
   // Src of media

   const src = `assets/photographers/`;

   // Variable for show the selected media

   let numberOfMedia;
   let selectedMedia;

   // Go to before media

   const beforeMedia = () => {
      if (numberOfMedia > 0) {
         numberOfMedia--;
         selectedMedia = allMedias[numberOfMedia];

         if (selectedMedia.image) {
            lightboxData.innerHTML = ` 
           <img tabindex="0" src="${src}/${selectedMedia.photographerId}/${selectedMedia.image}" alt ="${selectedMedia.title}"></img>
           <p>${selectedMedia.title}</p>
        `;
         } else {
            lightboxData.innerHTML = `
           <video tabindex="0" controls="" title="${selectedMedia.title}">
               <source src="${src}/${selectedMedia.photographerId}/${selectedMedia.video}" type="video/mp4">
           </video>
           <p>${selectedMedia.title}</p>
           `;
         }
      }
   };

   // Go to next media

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

   // Close light box

   const closeLightbox = () => {
      lightboxDom.style.display = "none";
      main.setAttribute("aria-hidden", "false");
      lightboxDom.setAttribute("aria-hidden", "true");
      document.body.style.overflowY = "scroll";
      main.setAttribute("aria-hidden", "false");
      lightboxDom.setAttribute("aria-hidden", "true");
   };

   // Display lightbox

   const displayLightBox = (media) => {
      numberOfMedia = Number(media.classList[1].replace("card-number-", ""));
      selectedMedia = allMedias[numberOfMedia];

      if (selectedMedia.image) {
         lightboxData.innerHTML = ` 
         <img 
         tabindex="0"
         src="${src}/${selectedMedia.photographerId}/${selectedMedia.image}" alt ="${selectedMedia.title}"></img>
         <p 
         tabindex="0">${selectedMedia.title}</p>
      `;
      } else {
         lightboxData.innerHTML = `
         <video tabindex="0" controls="" title="${selectedMedia.title}">
               <source src="${src}/${selectedMedia.photographerId}/${selectedMedia.video}" type="video/mp4">
         </video>
         <p>${selectedMedia.title}</p>
         `;
      }

      lightboxDom.style.display = "flex";
      document.body.style.overflowY = "hidden";
      main.setAttribute("aria-hidden", "true");
      lightboxDom.setAttribute("aria-hidden", "false");
      crossLightbox.focus();
   };

   // Event listener on click and with keyboards for

   document.querySelectorAll(".media").forEach((media) => {
      media.addEventListener("click", (e) => {
         displayLightBox(media);
      });

      media.addEventListener("keydown", (e) => {
         e.key === "Enter" ? displayLightBox(media) : null;
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

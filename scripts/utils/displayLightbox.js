// import lightbox from "../pages/photographer/components/lightbox.js";

const displayLightbox = (allMedias) => {
   const src = `assets/photographers/`;
   let numberOfMedia;
   let selectedMedia;
   //
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
   beforeLightbox.addEventListener("click", () => {
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
   });

   nextLightbox.addEventListener("click", () => {
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
   });

   closeLightbox.addEventListener("click", () => {
      lightboxDom.style.display = "none";
   });
};

export default displayLightbox;

import lightbox from "../pages/photographer/components/lightbox.js";

const displayLightbox = () => {
   document.querySelectorAll(".media-card-top").forEach((cardTop) => {
      cardTop.addEventListener("click", (e) => {
         console.log(document.querySelectorAll(".media-card-top"));
         if (e.target.tagName === "IMG") {
            lightboxData.innerHTML = lightbox(
               e.target.src,
               e.target.alt,
               "image"
            );
            lightboxDom.style.display = "flex";
         } else {
            lightboxData.innerHTML = lightbox(
               e.target.childNodes[1].src,
               e.target.title,
               "video"
            );
            lightboxDom.style.display = "flex";
         }

         //  console.log(e.target.childNodes[1].src);
         console.log(e.target);
      });
   });
};

export default displayLightbox;

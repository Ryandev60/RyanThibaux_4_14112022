const params = new URL(document.location).searchParams;
const transmittedId = params.get("id");

async function getPhotograperDOM() {
   // Penser à remplacer par les données récupérées dans le json
   let selectedPhotographer;
   let selectedMedia = [];

   await fetch("../../data/photographers.json")
      .then((response) => response.json())
      .then((response) => {
         // Get photographer by id
         response.photographers.forEach((photographer) => {
            photographer.id == transmittedId ? (selectedPhotographer = photographer) : null;
         });

         // Get media by photographerId
         response.media.forEach((media) => {
            media.photographerId == transmittedId ? selectedMedia.push(media) : null;
         });
      });

   // et bien retourner le tableau photographers seulement une fois
   return {
      selectedPhotographer,
      selectedMedia,
   };
}

async function displayData(selectedPhotographer, selectedMedia) {
   const main = document.querySelector("#main");
   const photographerModel = photographerHeaderFactory(selectedPhotographer, selectedMedia);
   const headerPhotographerDOM = photographerModel.getHeaderPhotographerDOM();
   const photographerMedia = photographerMediaFactory(selectedMedia);
   const mediaPhotographerDom = photographerMedia.getMediaPhotographerDOM();
   main.innerHTML = headerPhotographerDOM + mediaPhotographerDom;
}

async function init() {
   // Récupère les datas des photographes
   const { selectedPhotographer, selectedMedia } = await getPhotograperDOM();
   displayData(selectedPhotographer, selectedMedia);
}

init();

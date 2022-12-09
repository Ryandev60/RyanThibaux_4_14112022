import header from "./components/header.js";
import mediaCard from "./components/mediaCard.js";
import totalLikes from "./components/totalLikes.js";
import lightbox from "../../utils/lightbox.js";
import modal from "../../utils/modal.js";
import like from "../../utils/like.js";

const params = new URL(document.location).searchParams;
const selectedPhotographerId = params.get("id");

async function getPhotograperDOM() {
   //Data
   let selectedPhotographer;
   let selectedMedia = [];

   await fetch("../../data/photographers.json")
      .then((response) => response.json())
      .then((response) => {
         // Get photographer by id
         response.photographers.forEach((photographer) => {
            photographer.id == selectedPhotographerId
               ? (selectedPhotographer = photographer)
               : null;
         });

         // Get media by photographerId
         response.media.forEach((media) => {
            media.photographerId == selectedPhotographerId
               ? selectedMedia.push(media)
               : null;
         });
      });

   // Return datas of photographer and her medias
   return {
      selectedPhotographer,
      selectedMedia,
   };
}

// Display data in DOM
function displayData(selectedPhotographer, selectedMedia) {
   photographHeader.innerHTML = header(selectedPhotographer);
   mediaCardContainer.innerHTML = mediaCard(selectedMedia, sortSelect.value);
   totalLikesBox.innerHTML = totalLikes(selectedPhotographer, selectedMedia);
   sortSelect.addEventListener("change", () => {
      mediaCardContainer.innerHTML = mediaCard(selectedMedia, sortSelect.value);
      lightbox(selectedMedia);
      like();
   });
   lightbox(selectedMedia);
   modal(selectedPhotographer);
   like();
}

async function init() {
   // Récupère les datas des photographes
   const { selectedPhotographer, selectedMedia } = await getPhotograperDOM();
   displayData(selectedPhotographer, selectedMedia);
}

init();

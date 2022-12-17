// Import components

import header from "./components/header.js";
import mediaCard from "./components/mediaCard.js";
import totalLikes from "./components/totalLikes.js";
import lightbox from "./components/lightbox.js";
import modal from "./components/modal.js";
import like from "./components/like.js";

// Get id oh photographer in URL

const params = new URL(document.location).searchParams;
const selectedPhotographerId = params.get("id");

const getPhotograperDOM = async () => {
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
            media.photographerId == selectedPhotographerId ? selectedMedia.push(media) : null;
         });
      });

   // Return datas of photographer and her medias
   return {
      selectedPhotographer,
      selectedMedia,
   };
};

// Display data in DOM
const displayData = (selectedPhotographer, selectedMedia) => {
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
};

// Initialize all functions

const init = async () => {
   // Récupère les datas des photographes
   const { selectedPhotographer, selectedMedia } = await getPhotograperDOM();
   displayData(selectedPhotographer, selectedMedia);
};

init();

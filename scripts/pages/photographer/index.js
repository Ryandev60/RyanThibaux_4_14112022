import header from "./components/header.js";
import mediaSection from "./components/mediaSection.js";
import totalLikes from "./components/totalLikes.js";

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
            media.photographerId == selectedPhotographerId ? selectedMedia.push(media) : null;
         });
      });

   // Return datas of photographer and her medias
   return {
      selectedPhotographer,
      selectedMedia,
   };
}

// Display data in DOM
async function displayData(selectedPhotographer, selectedMedia) {
   const main = document.querySelector("#main");
   main.innerHTML =
      header(selectedPhotographer) +
      mediaSection(selectedMedia) +
      totalLikes(selectedPhotographer, selectedMedia);
}

async function init() {
   // Récupère les datas des photographes
   const { selectedPhotographer, selectedMedia } = await getPhotograperDOM();
   displayData(selectedPhotographer, selectedMedia);
}

init();

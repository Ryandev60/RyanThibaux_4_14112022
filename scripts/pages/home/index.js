// Import components

import photographerCard from "./components/photographerCard.js";

// Get data

const getPhotographers = async () => {
   let photographers = [];

   await fetch("../../data/photographers.json")
      .then((response) => response.json())
      .then((response) => {
         photographers = response.photographers;
         console.log(photographers);
      });
   return {
      photographers,
   };
};

// Display data

const displayData = (photographers) => {
   const photographersSection = document.querySelector(".photographer_section");
   console.log(photographersSection);
   photographers.forEach((photographer) => {
      photographersSection.innerHTML += photographerCard(photographer);
   });
};

// Initialize all functions

const init = async () => {
   const { photographers } = await getPhotographers();
   displayData(photographers);
};

init();

const params = new URL(document.location).searchParams;
const transmittedId = params.get("id");

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  let selectedPhotographer;
  let selectedMedia = [];

  await fetch("../../data/photographers.json")
    .then((response) => response.json())
    .then((response) => {
      // Get photographer by id
      response.photographers.forEach((photographer) => {
        photographer.id == transmittedId
          ? (selectedPhotographer = photographer)
          : null;
      });

      // Get media by photographerId
      response.media.forEach((media) => {
        media.photographerId == transmittedId
          ? selectedMedia.push(media)
          : null;
      });
    });

  // et bien retourner le tableau photographers seulement une fois
  return {
    selectedPhotographer,
    selectedMedia,
  };
}

async function displayData(selectedPhotographer) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModel = photographerFactory(selectedPhotographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographHeader.appendChild(userCardDOM);
}

async function init() {
  // Récupère les datas des photographes
  const { selectedPhotographer } = await getPhotographers();
  displayData(selectedPhotographer);
}

init();

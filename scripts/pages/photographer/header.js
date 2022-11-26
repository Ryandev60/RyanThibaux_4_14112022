// Mettre le code JavaScript lié à la page photographer.html

function photographerHeaderFactory(photographerInfo, photographerMedias) {
   const { id, name, city, country, tagline, portrait } = photographerInfo;
   const picture = `assets/photographers/PhotographersID/${portrait}`;

   let sort = "Popularité";
   // const sortByPopularity = a.likes - b.likes;
   // const sortByDate = new Date(a.date) - new Date(b.date);
   // const sortByTitle = a.title.toString().localeCompare(b.title.toString());

   const getHeaderPhotographerDOM = () => {
      return `<section class="photograph-header">
         <div class="photograph-header__left">
            <div class="photographer-header-content__left">
               <h1 class="name">${name}</h1>
               <p class="location">${city}, ${country}</p>
               <p class="quote">${tagline}</p>
            </div>
         </div>
         <div class="photograph-header__middle">
            <button id="contactButton" class="contact_button" onclick="displayModal()">
               Contactez-moi
            </button>
         </div>
         <div class="photograph-header__right">
            <img class="portrait" src="${picture}" />
         </div>
      </section>`;
   };

   // Return result of getHeaderPhotographerDOM
   return { getHeaderPhotographerDOM };
}

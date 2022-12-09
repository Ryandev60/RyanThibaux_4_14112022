const header = (photographerInfo) => {
   const { id, name, city, country, tagline, portrait } = photographerInfo;
   const picture = `assets/photographers/PhotographersID/${portrait}`;

   return `
         <div class="photograph-header__left">
            <div class="photographer-header-content__left">
               <h1 class="name">${name}</h1>
               <p class="location">${city}, ${country}</p>
               <p class="quote">${tagline}</p>
            </div>
         </div>
         <div class="photograph-header__middle">
            <button id="contactButton" class="contact_button">
               Contactez-moi
            </button>
         </div>
         <div class="photograph-header__right">
            <img class="portrait" src="${picture}" alt="Portrait de ${name}"/>
         </div>
      `;
};

export default header;

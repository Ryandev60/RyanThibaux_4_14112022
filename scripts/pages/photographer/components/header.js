const header = (photographerInfo) => {
   //Data

   const { id, name, city, country, tagline, portrait } = photographerInfo;

   // Picture src

   const picture = `assets/photographers/PhotographersID/${portrait}`;

   // Return

   return `
 <div class="photograph-header__left">
    <div class="photographer-header-content__left">
       <h1 tabindex="0" class="name">${name}</h1>
       <p tabindex="0" class="location">${city}, ${country}</p>
       <blockquote tabindex="0" class="quote">${tagline}</blockquote>
    </div>
 </div>
 <div class="photograph-header__middle">
    <button tabindex="0" type="button" id="contactButton" class="contact_button">
       Contactez-moi
    </button>
 </div>
 <div class="photograph-header__right">
    <img tabindex="0" class="portrait" src="${picture}" alt="Portrait de ${name}" />
 </div>
      `;
};

export default header;

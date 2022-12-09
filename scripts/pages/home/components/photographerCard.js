const photographerCard = (data) => {
   const { id, name, city, country, tagline, price, portrait } = data;

   const picture = `assets/photographers/PhotographersID/${portrait}`;

   return `
   <article class="photographers-card">
      <a tabindex="0"  aria-label="Aller à la page du photographe" class="link" href="photographer.html?id=${id}"
         ><img tabindex="0" class="portrait" src="${picture}" alt="Portrait de ${name}"/>
         <h2 tabindex="0"  class="name">${name}</h2></a>
      <p tabindex="0" lang="en" class="location">${city}, ${country}</p>
      <blockquote tabindex="0" class="quote">${tagline}</blockquote>
      <p tabindex="0" aria-label="${price} euros par jour" class="day-price">${price}€/jour</p>
   </article>
   `;
};

export default photographerCard;

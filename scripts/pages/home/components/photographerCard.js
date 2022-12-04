const photographerCard = (data) => {
   const { id, name, city, country, tagline, price, portrait } = data;

   const picture = `assets/photographers/PhotographersID/${portrait}`;

   return `
   <article class="photographers-card">
      <a class="link" href="photographer.html?id=${id}"
         ><img class="portrait" src="${picture}" alt="Portrait de ${name}"/>
         <h2 class="name">${name}</h2></a>
      <p class="location">${city}, ${country}}</p>
      <p class="quote">${tagline}</p>
      <p class="day-price">${price}€/jour</p>
   </article>
   `;
};

export default photographerCard;

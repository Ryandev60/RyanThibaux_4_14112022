function photographerFactory(data) {
   const { id, name, city, country, tagline, price, portrait } = data;
   console.log(portrait);

   const picture = `assets/photographers/PhotographersID/${portrait}`;

   function getUserCardDOM() {
      // Create element
      const article = document.createElement("article");
      article.classList.add("photographers-card");

      // Photoghrapher's link
      const linkToPhotographers = document.createElement("a");
      linkToPhotographers.classList.add("link");
      linkToPhotographers.setAttribute("href", `photographer.html?id=${id}`);
      article.appendChild(linkToPhotographers);

      // Images
      const img = document.createElement("img");
      img.classList.add("portrait");
      img.setAttribute("src", picture);
      linkToPhotographers.appendChild(img);

      // Name
      const h2 = document.createElement("h2");
      h2.classList.add("name");
      h2.textContent = name;
      linkToPhotographers.appendChild(h2);

      // Location
      const location = document.createElement("p");
      location.classList.add("location");
      location.textContent = `${city}, ${country}`;
      article.appendChild(location);

      // Quote
      const quote = document.createElement("p");
      quote.classList.add("quote");
      quote.textContent = tagline;
      article.appendChild(quote);

      // Day price
      const dayPrice = document.createElement("p");
      dayPrice.classList.add("day-price");
      dayPrice.textContent = `${price}€/jour`;
      article.appendChild(dayPrice);

      // Return article (card)
      return article;
   }

   // Return result of getUserCardDOM
   return { getUserCardDOM };
}

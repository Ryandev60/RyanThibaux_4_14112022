function photographerFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;
  console.log(portrait);

  const picture = `assets/photographers/PhotographersID/${portrait}`;

  function getUserCardDOM() {
    // Create element
    const article = document.createElement("article");
    const linkToPhotographers = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const location = document.createElement("p");
    const quote = document.createElement("p");
    const dayPrice = document.createElement("p");

    // Set content element
    img.setAttribute("src", picture);
    h2.textContent = name;
    location.textContent = `${city}, ${country}`;
    quote.textContent = tagline;
    dayPrice.textContent = `${price}€/jour`;
    linkToPhotographers.setAttribute("href", `photographer.html?id=${id}`);

    // Set class element
    article.classList.add("photographers-card");
    linkToPhotographers.classList.add("link");
    img.classList.add("portrait");
    h2.classList.add("name");
    location.classList.add("location");
    quote.classList.add("quote");
    dayPrice.classList.add("day-price");

    //Set element in the DOM
    article.appendChild(linkToPhotographers);
    linkToPhotographers.appendChild(img);
    linkToPhotographers.appendChild(h2);
    article.appendChild(location);
    article.appendChild(quote);
    article.appendChild(dayPrice);

    // Return article (card)
    return article;
  }

  // Return result of getUserCardDOM
  return { getUserCardDOM };
}

//Mettre le code JavaScript lié à la page photographer.html

function photographerFactory(data) {
   const { id, name, city, country, tagline, price, portrait } = data;
   const picture = `assets/photographers/PhotographersID/${portrait}`;
   function getUserCardDOM() {
      // Create element
      const sectionHeader = document.createElement("section");
      sectionHeader.classList.add("photograph-header");
      main.appendChild(sectionHeader);

      // *** Header's left part *** //
      const headerLeft = document.createElement("div");
      headerLeft.classList.add("photograph-header__left");
      sectionHeader.appendChild(headerLeft);

      // Header's left content
      const headerLeftContent = document.createElement("div");
      headerLeftContent.classList.add("photographer-header-content__left");
      headerLeft.appendChild(headerLeftContent);

      // H1
      const h1 = document.createElement("h1");
      h1.classList.add("name");
      h1.textContent = name;
      headerLeftContent.appendChild(h1);

      // Location
      const location = document.createElement("p");
      location.classList.add("location");
      location.textContent = `${city}, ${country}`;
      headerLeftContent.appendChild(location);

      // Quote
      const quote = document.createElement("p");
      quote.classList.add("quote");
      quote.textContent = tagline;
      headerLeftContent.appendChild(quote);

      // *** Header's middle part *** //
      const headerMiddle = document.createElement("div");
      headerMiddle.classList.add("photograph-header__middle");
      sectionHeader.appendChild(headerMiddle);

      // Contact button
      headerMiddle.appendChild(contactButton);

      // *** Header's right part *** //
      const headerRight = document.createElement("div");
      headerRight.classList.add("photograph-header__right");
      sectionHeader.appendChild(headerRight);

      // Image
      const img = document.createElement("img");
      img.classList.add("portrait");
      img.setAttribute("src", picture);
      headerRight.appendChild(img);

      return sectionHeader;
   }

   // Return result of getUserCardDOM
   return { getUserCardDOM };
}

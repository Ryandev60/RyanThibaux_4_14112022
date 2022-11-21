// Mettre le code JavaScript lié à la page photographer.html

function photographerFactory(photographerInfo, photographerMedias) {
   const { id, name, city, country, tagline, portrait } = photographerInfo;
   const picture = `assets/photographers/PhotographersID/${portrait}`;
   function getUserCardDOM() {
      // Create element
      const main = document.createElement("main");
      main.id = "main";

      // ****** Section header ****** //
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

      // ******* Section medias ****** //

      const sectionMedias = document.createElement("section");
      sectionMedias.classList.add("photograph-medias");
      sectionHeader.after(sectionMedias);

      //  Sort select container
      const sortInputContainer = document.createElement("div");
      sortInputContainer.classList.add("sort-select-container");
      sectionMedias.appendChild(sortInputContainer);

      // Sort select label
      const sortInputLabel = document.createElement("label");
      sortInputLabel.classList.add("sort-select-label");
      sortInputLabel.setAttribute("for", "sort-select");
      sortInputLabel.innerText = "Trier par";
      sortInputContainer.appendChild(sortInputLabel);

      // Sort select
      const sortInput = document.createElement("select");
      sortInput.classList.add("sort-select");
      sortInput.id = "sortSelect";
      sortInputLabel.after(sortInput);

      // Sort select option popularity
      const optionPopularity = document.createElement("option");
      optionPopularity.classList.add("sort-select-option");
      optionPopularity.setAttribute("value", "popularity");
      optionPopularity.innerText = "Popularité";
      sortInput.appendChild(optionPopularity);

      // Sort select option date
      const optionDate = document.createElement("option");
      optionDate.classList.add("sort-select-option");
      optionDate.setAttribute("value", "date");
      optionDate.innerText = "Date";
      sortInput.appendChild(optionDate);

      // Sort select option date
      const optionTitle = document.createElement("option");
      optionTitle.classList.add("sort-select-option");
      optionTitle.setAttribute("value", "title");
      optionTitle.innerText = "Titre";
      sortInput.appendChild(optionTitle);

      //Loop on cards

      // Container media card
      const mediaCardContainer = document.createElement("div");
      mediaCardContainer.classList.add("media-card-container");
      sectionMedias.appendChild(mediaCardContainer);

      photographerMedias.forEach((media) => {
         // Create media card
         const mediaCard = document.createElement("div");
         mediaCard.classList.add("media-card");
         mediaCardContainer.appendChild(mediaCard);

         // Top media card
         const mediaCardTop = document.createElement("div");
         mediaCardTop.classList.add("media-card-top");
         mediaCard.appendChild(mediaCardTop);

         // Images
         if (!media.video) {
            const mediaCardImage = document.createElement("img");
            mediaCardImage.setAttribute(
               "src",
               `./assets/photographers/${photographerInfo.name}/${media.image}`
            );
            mediaCardTop.appendChild(mediaCardImage);
         } else {
            const mediaCardVideo = document.createElement("video");
            mediaCardVideo.setAttribute("controls", "");
            mediaCardTop.appendChild(mediaCardVideo);
            const mediaCardVideoSource = document.createElement("source");
            mediaCardVideoSource.setAttribute(
               "src",
               `./assets/photographers/${photographerInfo.name}/${media.video}`
            );
            mediaCardVideoSource.setAttribute("type", "video/mp4");
            mediaCardVideo.appendChild(mediaCardVideoSource);
         }
      });

      // Return main
      return main;
   }

   // Return result of getUserCardDOM
   return { getUserCardDOM };
}

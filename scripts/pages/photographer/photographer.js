//Mettre le code JavaScript lié à la page photographer.html

function photographerFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;
  console.log(name + "test");
  const picture = `assets/photographers/PhotographersID/${portrait}`;
  console.log(data);
  function getUserCardDOM() {
    // Create element
    const h1 = document.createElement("h1");
    const location = document.createElement("p");
    const quote = document.createElement("p");
    const img = document.createElement("img");
    console.log(name);
    // Set content element
    h1.textContent = name;
    location.textContent = location;
    // Set class element
    h1.classList.add("name");
    //Set element in the DOM

    // Return article (card)
    // return article;

    return h1;
  }

  // Return result of getUserCardDOM
  return { getUserCardDOM };
}

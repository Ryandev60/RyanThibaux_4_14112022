const like = () => {
   // Variable

   let heartNumber;

   // Add or remove like

   const addOrRemoveLike = (e) => {
      // Get heartNumber with her class name
      heartNumber = Number(e.target.classList[3].replace("heart-number-", ""));
      // Get DOM's element
      const clickedHeart = document.querySelector(`.heart-number-${heartNumber}`);
      const numberOfLikes = document.querySelector(`.like-number-${heartNumber}`);
      // Add or remove like and change color of heart
      if (!clickedHeart.classList[4]) {
         numberOfLikes.innerText = Number(numberOfLikes.innerText) + 1;
         clickedHeart.classList.add("black");
         sumOfLikes.innerText = Number(sumOfLikes.innerText) + 1;
      } else {
         numberOfLikes.innerText = Number(numberOfLikes.innerText) - 1;
         clickedHeart.classList.remove("black");
         sumOfLikes.innerText = Number(sumOfLikes.innerText) - 1;
      }
   };

   // Add event listener
   document.querySelectorAll(".heart").forEach((heart) => {
      heart.addEventListener("click", (e) => {
         addOrRemoveLike(e);
      });
      heart.addEventListener("keydown", (e) => {
         e.key === "Enter" ? addOrRemoveLike(e) : null;
      });
   });
};

export default like;

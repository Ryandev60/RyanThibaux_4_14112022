const like = () => {
   let heartNumber;
   console.log(document.querySelectorAll(".heart"));
   document.querySelectorAll(".heart").forEach((heart) => {
      heart.addEventListener("click", (e) => {
         // Get heartNumber with her class name
         heartNumber = Number(
            e.target.classList[3].replace("heart-number-", "")
         );

         // Get DOM's element
         const clickedHeart = document.querySelector(
            `.heart-number-${heartNumber}`
         );
         const numberOfLikes = document.querySelector(
            `.like-number-${heartNumber}`
         );

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
      });
   });
};

export default like;

const totalLikes = (photographerInfo, photographerMedias) => {
   const { price } = photographerInfo;
   let sumOfLikes = 0;

   photographerMedias.forEach((media) => {
      sumOfLikes += media.likes;
   });

   return `<div class="total-likes"> 
             <p class="sum-of-likes">${sumOfLikes} <i class="fa-solid fa-heart"></i></p>
             <p class="price">${price}€ / jour</p>
          </div>`;
};

export default totalLikes;

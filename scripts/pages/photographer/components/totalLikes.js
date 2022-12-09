const totalLikes = (photographerInfo, photographerMedias) => {
   const { price } = photographerInfo;
   let sumOfLikes = 0;

   photographerMedias.forEach((media) => {
      sumOfLikes += media.likes;
   });

   return ` 
   <div class="total-likes-right">
             <p id="sumOfLikes" class="sum-of-likes">${sumOfLikes}</p>
             <i class="fa-solid fa-heart"></i>
    </div>    
    <p class="price">${price}€ / jour</p>
    `;
};

export default totalLikes;

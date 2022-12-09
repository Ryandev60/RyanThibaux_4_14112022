const totalLikes = (photographerInfo, photographerMedias) => {
   const { price, name } = photographerInfo;
   let sumOfLikes = 0;

   photographerMedias.forEach((media) => {
      sumOfLikes += media.likes;
   });

   return ` 
   <aside class="total-likes-right">
             <p aria-label="${photographerInfo.name} à obtenu un total de ${sumOfLikes} j'aime" tabindex="0" id="sumOfLikes" class="sum-of-likes">${sumOfLikes}</p>
             <i class="fa-solid fa-heart"></i>
    </aside>    
    <p aria-label="${price} euros par jour" tabindex="0" class="price">${price}€ / jour</p>
    `;
};

export default totalLikes;

const lightbox = (selectedMedias, media) => {
   const { image, video, title } = selectedMedias;
   console.log(media.src);

   return `
    
        <div class="lightbox"> 
            <div class="lightbox--left">
                 <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="lightbox--middle">
            <img src="${media}">
            <p></p>
            </div>
            <div class="lightbox--right">
                <i class="fa-solid fa-x"></i>
                <i class="fa-solid fa-chevron-right"></i>
                
            </div>

        
        </div>
    
    
    
    
    `;
};

export default lightbox;

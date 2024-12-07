const galleryItem = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

galleryItem.forEach((item) => {
  observer.observe(item);
});
      
      function showPopup(mediaSrc) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupVideo = document.getElementById('popup-video');
  
    popupImage.src = '';
    popupVideo.src = '';
    
    if (mediaSrc.endsWith('.mp4')) {
      popupImage.style.display = 'none'; 
      popupVideo.style.display = 'block'; 
      popupVideo.src = mediaSrc;
    } else {
      popupVideo.style.display = 'none'; 
      popupImage.style.display = 'block';
      popupImage.src = mediaSrc;
    }
    
    popup.classList.remove('hidden');
  }
  
  function hidePopup() {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupVideo = document.getElementById('popup-video');
    

    popupImage.src = '';
    popupVideo.src = '';
    
    popup.classList.add('hidden');
  }
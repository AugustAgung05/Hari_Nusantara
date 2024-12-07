const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.main-shape-line-svg, .main-shape-container-circle, .main-circle-content ,.main-rectangle-triangle, .main-rectangle-container, .main-rectangle-container-text-1, .main-rectangle-container-text-2, .main-rectangle-container-text-3, .main-footprints-left, .main-footprints-right, .image-left, .image-right, .text-left, .text-right, .curve-line-svg-up, .curve-line-svg-down').forEach(section => {
    observer.observe(section);
});

const texts = [
"Hari Nusantara adalah peringatan untuk mengenang dan menghargai kekayaan laut serta potensi maritim Indonesia.",
"Sebagai negara maritim, Indonesia memiliki lebih dari 17.000 pulau yang menjadikan laut sebagai sumber kehidupan.",
"Melalui perayaan Hari Nusantara, kita mendorong rasa bangga terhadap kekayaan maritim Indonesia dan komitmen untuk menjaga laut kita.",
"Peringatan Hari Nusantara adalah momen untuk mempererat persatuan bangsa, menjaga kelestarian alam laut, serta menggali potensi besar sektor maritim demi kemajuan Indonesia."
];

let currentIndex = 0;

setInterval(function() {
    var contentElement = document.getElementById('dynamic-text');

    contentElement.innerHTML = texts[currentIndex];

    currentIndex = (currentIndex + 1) % texts.length;
}, 5000);
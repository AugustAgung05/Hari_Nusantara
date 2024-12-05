let slider = document.querySelector('.kegiatan-items-container');

function moveNext() {
    let items = document.querySelectorAll('.kegiatan-items-column');
    slider.appendChild(items[0]);
}

function movePrev() {
    let items = document.querySelectorAll('.kegiatan-items-column');
    slider.prepend(items[items.length - 1]);
}
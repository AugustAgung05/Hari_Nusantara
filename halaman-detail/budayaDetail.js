document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1.5,
    class: 'is-inview',
    smartphone: 'smooth'
    });

    scroll.on('scroll', (args) => {

    const scrollY = args.scroll.y;

    const detailImage = document.querySelector('.detail-image');
    detailImage.style.transform = `translateX(${scrollY * -1}px)`;
    const detailText = document.querySelector('.detail-card');
    detailText.style.transform = `translateY(${scrollY * -1}px)`;

    });
});

// Inisialisasi player
const player = videojs('tari-saman');

// Ubah sumber video
function updateVideoSource(newSource, type) {
    player.src({
        src: newSource,
        type: type
    });
    player.load(); // Memastikan video dimuat ulang
}

function updatePoster(newPoster) {
    player.poster(newPoster);
}

function exitPopup() {
    let popup = document.querySelector('.popup-container');
    let popupImg = document.querySelector('.popup-container-img');
    player.pause();
    popup.classList.remove('active');
    popupImg.classList.remove('active');
}

function popUp1() {
    updatePoster('/assets/image/thumbnail-1.jpg');
    updateVideoSource('/assets/image/videos/Tari Saman.mp4', 'video/mp4');
    let popup = document.querySelector('.popup-container');
    popup.classList.add('active');
}

function popUp2() {
    updatePoster('/assets/image/videos/hqdefault.jpg');
    updateVideoSource('/assets/image/videos/TRADISI UNIK PEMAKAMAN KREMASI _NGABEN BALI_ dokumenter.mp4', 'video/mp4');
    let popup = document.querySelector('.popup-container');
    popup.classList.add('active');
}
function popUp3() {
    updatePoster('/assets/image/videos/hqdefault (1).jpg');
    updateVideoSource('/assets/image/videos/videoplayback.mp4', 'video/mp4');
    let popup = document.querySelector('.popup-container');
    popup.classList.add('active');
}

function popUp4() {
    updatePoster('/assets/image/videos/hqdefault (2).jpg');
    updateVideoSource('/assets/image/videos/videoplayback (1).mp4', 'video/mp4');
    let popup = document.querySelector('.popup-container');
    popup.classList.add('active');
}

function popUp5() {
    updatePoster('/assets/image/videos/hqdefault (3).jpg');
    updateVideoSource('/assets/image/videos/FESTIVAL FAHOMBO (LOMPAT BATU) DI EVENT MANIAMOLO FEST 2022 __ HILISIMAETANO_NIAS SELATAN.mp4', 'video/mp4');
    let popup = document.querySelector('.popup-container');
    popup.classList.add('active');
}

function popupImg1() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Aceh Dancer.jpg'
    popup.classList.add('active');
}

function popupImg2() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/f58a6122-030d-4ffd-92f3-6e4980b1e57a.jpg'
    popup.classList.add('active');
}

function popupImg3() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/9 Properti Tari Saman (Lengkap Beserta Gambar Dan Deskripsi).jpg'
    popup.classList.add('active');
}

function popupImg4() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Tari Saman ,Aceh PINdonesia (1).jpg'
    popup.classList.add('active');
}

function popupImg5() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image//kostum saman.jpg'
    popup.classList.add('active');
}

function popupImg6() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/saman dance Aceh.jpg'
    popup.classList.add('active');
}

function popupImg7() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/UNESCO Akan Beri Sertifikat untuk Tari Saman - Satu Harapan.jpg'
    popup.classList.add('active');
}

function popupImg8() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Tari Saman ,Aceh PINdonesia (2).jpg'
    popup.classList.add('active');
}

function popupImg9() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Attending Ngaben Balinese Cremation Ceremony_ Cultural Guide.jpg'
    popup.classList.add('active');
}

function popupImg10() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Corpse burning ceremony called Ngaben, of a royal family member in Ubud, Bali_ This is one of several steps to be done_.jpg'
    popup.classList.add('active');
}

function popupImg11() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Homepage.jpg'
    popup.classList.add('active');
}

function popupImg12() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/NGABEN MASAL BALINURAGA, UPACARA PITRA YADNYA 19 SEPTEMBER 2023 (BALI SUMATERA).jpg'
    popup.classList.add('active');
}

function popupImg13() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Ngaben, Upacara Kematian Khas Masyarakat Bali.jpg'
    popup.classList.add('active');
}

function popupImg14() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/ngaben1.jpg'
    popup.classList.add('active');
}

function popupImg15() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Prosesi Upacara Ngaben, Bali.jpg'
    popup.classList.add('active');
}

function popupImg16() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/ngaben/Tonys Villas and Resort, Seminyak - Bali _ Playcation in Bali.jpg'
    popup.classList.add('active');
}

function popupImg17() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Hier kann man nicht wegsehen_ Bilder, die einen staunen lassen.jpg'
    popup.classList.add('active');
}
function popupImg18() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Karapan sapi (1).jpg'
    popup.classList.add('active');
}
function popupImg19() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Karapan Sapi Mendunikan.jpg'
    popup.classList.add('active');
}
function popupImg20() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/karapan.jpg'
    popup.classList.add('active');
}
function popupImg21() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Karapan Sapi, Giliraja Island, Madura, East Java, Indonesia___.jpg'
    popup.classList.add('active');
}
function popupImg22() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Karapan Sapi.jpg'
    popup.classList.add('active');
}
function popupImg23() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Lukisan Digital Karapan Sapi.jpg'
    popup.classList.add('active');
}
function popupImg24() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/Karapan sapi/Tradisi Karapan Sapi, Pesta Kebanggaan Masyarakat Madura.jpg'
    popup.classList.add('active');
}

function popupImg25() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/Fakta Unik Gamelan, Instrumen Khas Nusantara yang Terkenal Sampai Mancanegara.jpg'
    popup.classList.add('active');
}

function popupImg26() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/Gamelan - Java Musical Instrument.jpg'
    popup.classList.add('active');
}

function popupImg27() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/gamelan from central java.jpg'
    popup.classList.add('active');
}

function popupImg28() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/gamelanlagi.jpg'
    popup.classList.add('active');
}

function popupImg29() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/Gamelan jawa.jpg'
    popup.classList.add('active');
}

function popupImg30() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/Gamelan.jpg'
    popup.classList.add('active');
}

function popupImg31() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/gamelancoy.jpg'
    popup.classList.add('active');
}

function popupImg32() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/gamelan/Nama-nama Gamelan Jawa dan Sejarahnya.jpg'
    popup.classList.add('active');
}

function popupImg33() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/Bawömataluo.jpg'
    popup.classList.add('active');
}

function popupImg34() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/download (1).jpg'
    popup.classList.add('active');
}

function popupImg35() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/download (2).jpg'
    popup.classList.add('active');
}

function popupImg36() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/gancangpml.jpg'
    popup.classList.add('active');
}

function popupImg37() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/Lompat Batu Nias.jpg'
    popup.classList.add('active');
}

function popupImg38() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/Etnografi  Sunda,Dayak Kalteng,Batak,Jawa.jpg'
    popup.classList.add('active');
}

function popupImg39() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/Stone jumping - Nias.jpg'
    popup.classList.add('active');
}

function popupImg40() {
    let popup = document.querySelector('.popup-container-img');
    let popupImg = document.querySelector('.popup-img');
    popupImg.src = '/assets/image/lompat batu/Tradisi Fahombo_ Lompat Batu sebagai Bentuk Ritual Kedewasaan di Nias.jpg'
    popup.classList.add('active');
}
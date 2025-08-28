// Liste des images présentes dans le dossier (générée automatiquement)
const IMAGES = [
  "FASTNET_07-2025_foil_2.jpg",
  "FASTNET_07-2025_foils.jpg",
  "FASTNET_07-2025_foils_3.jpg",
  "photos_de_Cherbourg_par_Jean001.jpg",
  "photos_de_Cherbourg_par_Jean003.jpg",
  "photos_de_Cherbourg_par_Jean004.jpg",
  "photos_de_Cherbourg_par_Jean005.jpg",
  "photos_de_Cherbourg_par_Jean006.jpg",
  "photos_de_Cherbourg_par_Jean007.jpg",
  "photos_de_Cherbourg_par_Jean008.jpg",
  "photos_de_Cherbourg_par_Jean009.jpg",
  "photos_de_Cherbourg_par_Jean010.jpg",
  "photos_de_Cherbourg_par_Jean011.jpg",
  "photos_de_Cherbourg_par_Jean012.jpg",
  "photos_de_Cherbourg_par_Jean013.jpg",
  "photos_de_Cherbourg_par_Jean014.jpg",
  "photos_de_Cherbourg_par_Jean015.jpg",
  "photos_de_Cherbourg_par_Jean016.jpg",
  "photos_de_Cherbourg_par_Jean017.jpg",
  "photos_de_Cherbourg_par_Jean018.jpg",
  "photos_de_Cherbourg_par_Jean019.jpg",
  "photos_de_Cherbourg_par_Jean020.jpg",
  "photos_de_Cherbourg_par_Jean021.jpg",
  "photos_de_Cherbourg_par_Jean022.jpg",
  "photos_de_Cherbourg_par_Jean023.jpg",
  "photos_de_Cherbourg_par_Jean024.jpg",
  "photos_de_Cherbourg_par_Jean025.jpg",
  "photos_de_Cherbourg_par_Jean026.jpg",
  "photos_de_Cherbourg_par_Jean027.jpg",
  "photos_de_Cherbourg_par_Jean028.jpg",
  "photos_de_Cherbourg_par_Jean029.jpg",
  "photos_de_Cherbourg_par_Jean030.jpg",
  "photos_de_Cherbourg_par_Jean031.jpg",
  "photos_de_Cherbourg_par_Jean032.jpg",
  "photos_de_Cherbourg_par_Jean033.jpg",
];

// Descriptions courtes (basées sur l'observation de quelques images)

// Métadonnées simples pour filtrage par source
const items = IMAGES.map((file) => ({
  file,
  tag: file.toLowerCase().startsWith("fastnet") ? "fastnet" : "jean",
  caption: file
    .replace(/_/g, " ")
    .replace(/\.jpg$/i, ""),
}));

const $gallery = document.getElementById("gallery");
const $filters = document.getElementById("filters");
const $lightbox = document.getElementById("lightbox");
const $lightboxImg = document.getElementById("lightbox-img");
const $lightboxCaption = document.getElementById("lightbox-caption");
const $year = document.getElementById("year");
const $btnPrev = $lightbox.querySelector('.prev');
const $btnNext = $lightbox.querySelector('.next');
const $btnClose = $lightbox.querySelector('.lightbox__close');

let currentIndex = -1;
let currentFilter = "all";

function render(){
  $gallery.innerHTML = "";
  const list = items
    .map((v, i) => ({...v, index: i}))
    .filter(v => currentFilter === "all" ? true : v.tag === currentFilter);

  for(const it of list){
    const card = document.createElement('article');
    card.className = 'card';

    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = it.file; // même dossier
    img.alt = it.caption;
    img.addEventListener('click', () => openLightbox(it.index));

    const cap = document.createElement('figcaption');
    cap.className = 'caption';
    cap.textContent = it.caption;

    fig.appendChild(img);
    fig.appendChild(cap);
    card.appendChild(fig);
    $gallery.appendChild(card);
  }
}

function openLightbox(index){
  currentIndex = index;
  const { file, caption } = items[index];
  $lightboxImg.src = file;
  $lightboxImg.alt = caption;
  $lightboxCaption.innerHTML = `<strong>${caption}</strong>`;
  $lightbox.hidden = false;
}
function closeLightbox(){ $lightbox.hidden = true; }
function next(){
  const idx = (currentIndex + 1) % items.length;
  openLightbox(idx);
}
function prev(){
  const idx = (currentIndex - 1 + items.length) % items.length;
  openLightbox(idx);
}

// Navigation au clavier
window.addEventListener('keydown', (e) => {
  if($lightbox.hidden) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') next();
  if(e.key === 'ArrowLeft') prev();
});
$btnClose.addEventListener('click', closeLightbox);
$btnNext.addEventListener('click', next);
$btnPrev.addEventListener('click', prev);
$lightbox.addEventListener('click', (e)=>{ if(e.target === $lightbox) closeLightbox(); });

// Filtres
$filters.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-filter]');
  if(!btn) return;
  currentFilter = btn.dataset.filter;
  for(const b of $filters.querySelectorAll('.chip')) b.classList.remove('active');
  btn.classList.add('active');
  render();
});

// Footer year
$year.textContent = new Date().getFullYear();

// Init
render();

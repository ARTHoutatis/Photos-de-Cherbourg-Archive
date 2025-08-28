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
const DESCRIPTIONS = {
  "photos_de_Cherbourg_par_Jean001.jpg": "Page d'introduction listant les sources des cartes postales (archives départementales, guide de 1910). Décembre 1972.",
  "photos_de_Cherbourg_par_Jean003.jpg": "Pont tournant: foule, charrette et cycliste sur le pont; texte explicatif à droite sur le bassin à flot.",
  "photos_de_Cherbourg_par_Jean004.jpg": "Carte postale: la plage de Cherbourg à marée haute, foule de baigneurs devant les bâtiments du front de mer.",
  "photos_de_Cherbourg_par_Jean005.jpg": "L'arrivée du train au quai d'embarquement; locomotive et navire côte à côte.",
  "photos_de_Cherbourg_par_Jean006.jpg": "Mise en page: pont tournant et notice décrivant le fonctionnement hydraulique.",
  "photos_de_Cherbourg_par_Jean007.jpg": "Terrasse du casino: élégantes attablées face à la mer, bâtiment à dôme en arrière-plan.",
  "photos_de_Cherbourg_par_Jean008.jpg": "Texte: le Casino, sur la plage des mielles, propose concerts, théâtre, cercle et cinématographe.",
  "photos_de_Cherbourg_par_Jean009.jpg": "Composition avec photo du pont tournant et texte sur le bassin à flot et son sens de circulation.",
  "photos_de_Cherbourg_par_Jean010.jpg": "Carte postale: le canal et les avenues, allée d'arbres et chemin longeant l'eau.",
  "photos_de_Cherbourg_par_Jean011.jpg": "Pont tournant: vue animée et rappel du sens unique de part et d'autre de l'axe.",
  "photos_de_Cherbourg_par_Jean012.jpg": "Panorama des appontements des jetées, vue sur la rade et les navires à quai.",
  "photos_de_Cherbourg_par_Jean013.jpg": "Avenue Carnot: promenade arborée, passants et voitures d'époque.",
  "photos_de_Cherbourg_par_Jean014.jpg": "Page de chanson en patois (type Alfred Rossel): vers imprimés.",
  "photos_de_Cherbourg_par_Jean015.jpg": "Quai Alexandre III: voiliers le long du quai et kiosque/abri au centre.",
  "photos_de_Cherbourg_par_Jean016.jpg": "Gare de Cherbourg–Barfleur: locomotive à quai devant le bâtiment de la gare.",
  "photos_de_Cherbourg_par_Jean017.jpg": "Quai Coligny: façades commerçantes, fiacre et passants sur le pavé.",
  "photos_de_Cherbourg_par_Jean018.jpg": "Le port et le quai Coligny: alignement de voiliers amarrés, animation sur le quai.",
  "photos_de_Cherbourg_par_Jean019.jpg": "Quai Coligny: scène urbaine avec charrette et foule au débouché de la rue.",
  "photos_de_Cherbourg_par_Jean020.jpg": "Le Bassin du Commerce: petits voiliers et promeneurs le long du quai.",
  "photos_de_Cherbourg_par_Jean021.jpg": "Page de texte: Caligny et De Caux projettent de creuser un bassin, l'entourer de murs de quai et construire deux jetées.",
  "photos_de_Cherbourg_par_Jean022.jpg": "Texte: église de la Trinité (XVe s., portail et tour vers 1825), détails de la chaire et bas‑reliefs.",
  "photos_de_Cherbourg_par_Jean023.jpg": "Le Bassin du Commerce: voiliers gréés au pied du quai, groupes de promeneurs.",
  "photos_de_Cherbourg_par_Jean024.jpg": "Carte postale: l'Hôtel de Ville et la place, kiosque central, colonne/obélisque et façades alignées.",
  "photos_de_Cherbourg_par_Jean025.jpg": "Gros plan du texte: projet de bassin à Cherbourg et construction de deux jetées.",
  "photos_de_Cherbourg_par_Jean026.jpg": "La vigie de l’Onglet un jour de grande tempête: lames submergeant la digue (mention du bureau télégraphique).",
  "photos_de_Cherbourg_par_Jean027.jpg": "Les Halles: grand bâtiment de marché, charrettes et foule aux abords.",
  "photos_de_Cherbourg_par_Jean028.jpg": "Église Sainte‑Trinité: vue générale avec nef gothique et tour carrée.",
  "photos_de_Cherbourg_par_Jean029.jpg": "Grande place ombragée: alignement de façades et flèche d’église au fond, bancs au premier plan.",
  "photos_de_Cherbourg_par_Jean030.jpg": "Place du Château et le théâtre un jour de marché: étals et foule devant la façade du théâtre.",
  "photos_de_Cherbourg_par_Jean031.jpg": "Place du Château et le marché: tramway à vapeur au centre de l’animation.",
  "photos_de_Cherbourg_par_Jean032.jpg": "Le pont tournant avec tramway: vue encadrée par la structure métallique (note sur l’électrification en 1912).",
  "photos_de_Cherbourg_par_Jean033.jpg": "Texte: Théâtre place du Château, construit en 1882 (architecte Delalande), décorations Lefèvre, peintures Clairin et Vauthier.",
  "FASTNET_07-2025_foils.jpg": "IMOCA rouge amarré au port de Cherbourg, grands foils et mât très haut sous ciel bleu.",
  "FASTNET_07-2025_foils_3.jpg": "IMOCA Initiatives-Cœur rouge se déplace dans le port, foils déployés, lumière douce de fin de journée.",
  "FASTNET_07-2025_foil_2.jpg": "IMOCA rouge sur le ponton, foils visibles de part et d'autre, eau calme du bassin.",
};

// Métadonnées simples pour filtrage par source
const items = IMAGES.map((file) => ({
  file,
  tag: file.toLowerCase().startsWith("fastnet") ? "fastnet" : "jean",
  caption: file
    .replace(/_/g, " ")
    .replace(/\.jpg$/i, ""),
  description: DESCRIPTIONS[file] || (file.toLowerCase().startsWith("fastnet")
    ? "Voilier de course au port de Cherbourg."
    : "Carte postale ancienne ou page illustrée de Cherbourg."),
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
  const { file, caption, description } = items[index];
  $lightboxImg.src = file;
  $lightboxImg.alt = caption;
  $lightboxCaption.innerHTML = `<strong>${caption}</strong><br><small>${description}</small>`;
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

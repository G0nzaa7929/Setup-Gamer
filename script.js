/* ============ EDITA AQUÍ TUS PRODUCTOS ============
   url: tu enlace de afiliado (el que generas con Amazon Asociados → SiteStripe).
   Ejemplo: https://www.amazon.com/dp/B0XXXXXXXX?tag=tu-id-20 o un enlace corto https://amzn.to/xxxxxxx */
const PRODUCTS = [
  {name:"Teclado mecánico inalámbrico Redragon", cat:"Teclados", emoji:"⌨️", color:"#CFE8EC",
   desc:"Redragon K742 Wireless Mechanical Gaming Keyboard with Knob for PC Computer ,Teclado cremoso inalámbrico Bluetooth 5.0/2.4GHz/USB C con teclado numérico, retroiluminación RGB, intercambiable en caliente ",
   url:"https://www.amazon.com/dp/B0F93FMYD5/ref=cm_sw_r_as_gl_apa_gl_i_BHQ3QWEY8W8E2RKFCATC?linkCode=ml1&tag=gonza03c-21&linkId=b81984b7a1de32b48187ae59b4575563&gaOptInStatus=true" },

  {name:"Ratón ergonómico vertical", cat:"Ratones", price:"$29.99", emoji:"🖱️", color:"#F6E3B4",
   desc:"Posición natural de la muñeca para jornadas largas sin molestias.",
url:"https://www.amazon.com/dp/PEGA-AQUI-ASIN?tag=TU-ID-20"},

  {name:"Soporte para portátil de aluminio", cat:"Accesorios", price:"$24.90", emoji:"💻", color:"#D9E4F5",
   desc:"Plegable, regulable en altura y compatible con portátiles de hasta 17 pulgadas.",
url:"https://www.amazon.com/dp/PEGA-AQUI-ASIN?tag=TU-ID-20"},

  {name:"Lámpara LED de escritorio", cat:"Iluminación", price:"$34.95", emoji:"💡", color:"#F3D9D0",
   desc:"Luz regulable en temperatura y brillo, con carga USB integrada.",
url:"https://www.amazon.com/dp/PEGA-AQUI-ASIN?tag=TU-ID-20"},

  {name:"Auriculares con cancelación de ruido", cat:"Audio", price:"", emoji:"🎧", color:"#DDD6F0",
   desc:"Acer OHR703 Auriculares Bluetooth con cancelación de ruido adaptativos Audio inalámbrico LDAC de alta resolución, cancelación de ruido híbrido de 45 dB, modo de transparencia.",
url:"https://link.amazon/B0bFg5CB9"},

  {name:"Mousepad Aothia", cat:"Accesorios", emoji:"🟦", color:"#D5ECD9",
   desc:"Aothia - Protector de escritorio de piel sintética antideslizante e impermeable para mouse, escritorio, oficina, hogar, laptop, 23.6 x 13.7 pulgadas, negro.",
   url:"https://link.amazon/B0dcWPvbo"}
];
/* =================================================== */

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.cat))];
let active = 'Todos';

function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}

function render(){
  filters.innerHTML = cats.map(c =>
    `<button class="chip" aria-pressed="${c===active}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  grid.innerHTML = PRODUCTS.filter(p => active==='Todos' || p.cat===active).map(p => `
    <article class="card">
      <div class="thumb" style="background:${p.color}" aria-hidden="true">${p.emoji}</div>
      <div class="body">
        <p class="cat">${esc(p.cat)}</p>
        <h2>${esc(p.name)}</h2>
        <p class="desc">${esc(p.desc)}</p>
        <div class="row">
          <span class="price">${esc(p.price)}</span>
          <a class="buy" href="${esc(p.url)}" target="_blank" rel="sponsored nofollow noopener noreferrer">Comprar en Amazon</a>
        </div>
      </div>
    </article>`).join('');
}
filters.addEventListener('click', e => {
  const b = e.target.closest('.chip'); if(!b) return;
  active = b.dataset.c; render();
});
render();

const promo = [
    {
        judul: "Promo Ramadhan",
        deskripsi: "Potongan harga hingga Rp 1.000.000 untuk motor matic & bebek",
        kode: "RAMADHAN25",
        gambar: img/rama.jpg
    },
    {
        judul: "Sport Sale",
        deskripsi: "Diskon 20% untuk motor sport pilihan",
        kode: "SPORT20",
        gambar: "img/promo2.jpg"
    }
];

let html = "";
promo.forEach(p => {
    html += `
    <div class="promo-card">
        <img src="${p.gambar}">
        <h4>${p.judul}</h4>
        <p>${p.deskripsi}</p>
        <div class="kode">
            <span>${p.kode}</span>
            <button onclick="salin('${p.kode}')">Salin Kode</button>
        </div>
    </div>
    `;
});

document.getElementById("promoList").innerHTML = html;

function salin(kode){
    navigator.clipboard.writeText(kode);
    alert("Kode promo berhasil disalin!");
}
function pakai(kode){
    window.open(
      `https://wa.me/6283142109714?text=Halo saya ingin pakai kode promo ${kode}`,
      "_blank"
    );
}

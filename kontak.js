const sales = [
    {
        nama: "Roma King",
        jabatan: "Sales Motor",
        wa: "6283142109714",
        pesan: "Halo saya ingin tanya motor"
    },
    {
        nama: "Wildan",
        jabatan: "Sales Motor",
        wa: "6285166664321",
        pesan: "Halo bang"
    },
    {
        nama: "Ridhon",
        jabatan: "Sales Motor",
        wa: "6288902934604",
        pesan: "Mau tanya motor"
    },
    {
        nama: "Rangga",
        jabatan: "Sales Motor",
        wa: "6283867101749",
        pesan: "Min motor masih ada?"
    }
];

let html = "";
sales.forEach(s => {
    html += `
    <div class="kontak-card">
        <h4>${s.nama}</h4>
        <p>${s.jabatan}</p>
        <button class="wa" onclick="kirim('${s.wa}','${s.pesan}')">
            Kirim Pesan
        </button>
    </div>
    `;
});

document.getElementById("kontakList").innerHTML = html;

function kirim(no, pesan){
    window.open(
        `https://wa.me/${no}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
}console.log(typeof supabase);


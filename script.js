 const SUPABASE_URL = "https://dfvfozajkimrqhqsicbo.supabase.co";
const SUPABASEKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmdmZvemFqa2ltcnFocXNpY2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzODgwMDYsImV4cCI6MjA4Mzk2NDAwNn0.-0WG1CVf8PE8qYTQ1PSp2vW-5yd2krwGQj4Kqn0hMl0";
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASEKEY
);

let motor = [
    { nama: "CBR 150", harga: 16000000, jenis: "sport", foto: "img/cbr150.png" },
    { nama: "Beat FI", harga: 9000000, jenis: "matic", foto: "img/beat.webp" },
    { nama: "Supra X", harga: 7500000, jenis: "bebek", foto: "img/supra.png" },
    { nama: "R15 V3", harga: 20000000, jenis: "sport", foto: "img/r15.png" }
];

function tampil(list) {
    let html = "";
    list.forEach((m,i) => {
        html += `
        <div class="motor-card">
            <div class="foto"><img src="${m.foto}" width="100%"></div>
            <h4>${m.nama}</h4>
            <p>Rp ${m.harga.toLocaleString()}</p>
            <button onclick="detail(${i})">Detail</button>
            <button onclick="pesan(${i})">Pesan</button>

        </div>`;
    });
    document.getElementById("motorList").innerHTML = html;
}

tampil(motor);

function filterMotor(j) {
    if (j === "all") return tampil(motor);
    tampil(motor.filter(m => m.jenis === j));
}

document.getElementById("search").onkeyup = function(){
    let q = this.value.toLowerCase();
    taconstmpil(motor.filter(m => m.nama.toLowerCase().includes(q)));
}



function detail(i){
    document.getElementById("popup").style.display="flex";
    let m = motor[i];
    document.getElementById("popFoto").src = m.foto;
    document.getElementById("popNama").innerText = m.nama;
    document.getElementById("popHarga").innerText = "Rp " + m.harga.toLocaleString();
}
 // ===== INIT SUPABASE =====
 

console.log("Supabase siap");

// ===== TEST =====
async function test() {
  const { data, error } = await supabaseClient
    .from("motor")
    .select("*");

  if (error) {
    console.error(error);
  } else {
    console.log("DATA MOTOR:", data);
  }
}

test();
let motorDipilih = null;

function pesan(index){
    motorDipilih = motor[index];

    document.getElementById("popup").style.display = "flex";
    document.getElementById("popFoto").src = motorDipilih.foto;
    document.getElementById("popNama").innerText = motorDipilih.nama;
    document.getElementById("popHarga").innerText =
        "Rp " + motorDipilih.harga.toLocaleString();
}

function pesan(index) {
    const m = motor[index];

    // simpan motor ke localStorage
    localStorage.setItem("checkoutMotor", JSON.stringify(m));

    // pindah ke halaman checkout
    window.location.href = "checkout.html";
}

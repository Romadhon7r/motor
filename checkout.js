alert("checkout.js KELOAD");

const motor = JSON.parse(localStorage.getItem("checkoutMotor"));

if (!motor) {
  alert("Motor tidak ditemukan");
  location.href = "index.html";
}

// tampilkan motor
async function kirimPesanan() {
  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const alamat = document.getElementById("alamat").value;

  if (!nama || !hp || !alamat) {
    alert("Lengkapi data dulu!");
    return;
  }

  const { error } = await supabaseClient
    .from("pesanan_motor")
    .insert([{
      namamotor: localStorage.getItem("nama_motor"),
      harga: localStorage.getItem("harga"),
      namapembeli: nama,
      nohp: hp,
      alamat: alamat
    }]);

  if (error) {
    console.error(error);
    alert("Gagal kirim pesanan");
    return;
  }

  // ✅ WAJIB ADA INI
  alert("Pesanan berhasil dikirim!");
  window.location.href = "https://wa.me/6283142109714";
}

function kirimPesanan() {
  alert("FUNGSI KEPANGGIL");
}


  if (!nama || !hp || !alamat) {
    alert("Lengkapi data dulu!");
    return;
  }

  const { error } = await supabaseClient
  .from("pesanan_motor")
  .insert([{
    namamotor: motor.nama,
    harga: motor.harga,
    namaPembeli: nama,
    no_hp: hp,
    alamat: alamat
  }]);


  if (error) {
    console.error(error);
    alert("Gagal menyimpan pesanan");
  } else {
    alert("Pesanan berhasil disimpan!");
    localStorage.removeItem("checkoutMotor");
  }
document.getElementById("btnKirim").addEventListener("click", kirimPesanan);


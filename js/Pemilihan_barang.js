const inputCari = document.querySelector(".search-bar");
const semuaCard = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
let cardAktif = null;


inputCari.addEventListener("input", function() {
    const kata = this.value.toLowerCase();
    semuaCard.forEach(function(card) {
        const nama = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = nama.includes(kata) ? "block" : "none";
    });
});


semuaCard.forEach(function(card) {
    const tombol = card.querySelector(".btn-detail");
    tombol.addEventListener("click", function() {
        if (tombol.classList.contains("habis")) return;

        cardAktif = card;
        document.getElementById("popup-gambar").src = card.querySelector("img").src;
        document.getElementById("popup-stok").textContent = card.querySelector(".stok").textContent;
        document.getElementById("popup-nama").textContent = card.querySelector("h4").textContent;
        document.getElementById("popup-deskripsi").textContent = card.querySelector(".deskripsi").textContent;
        document.getElementById("popup-harga").textContent = card.querySelector(".harga-row b").textContent;
        popup.classList.add("muncul");
    });
});


document.getElementById("tutup-popup").addEventListener("click", function() {
    popup.classList.remove("muncul");
});
popup.addEventListener("click", function(e) {
    if (e.target === popup) popup.classList.remove("muncul");
});


document.getElementById("btn-pinjam").addEventListener("click", function() {
    const tglPinjam = document.getElementById("tgl-pinjam").value;
    const tglKembali = document.getElementById("tgl-kembali").value;
    if (!tglPinjam || !tglKembali) {
        alert("Isi tanggal pinjam & kembali dulu!");
        return;
    }

    const nama = document.getElementById("popup-nama").textContent;
    alert("Berhasil! " + nama + " dipinjam dari " + tglPinjam + " sampai " + tglKembali);

    
    const stokText = cardAktif.querySelector(".stok");
    let angkaStok = parseInt(stokText.textContent.replace(/[^0-9]/g, ""));
    angkaStok = angkaStok - 1;
    stokText.textContent = "Stok: " + angkaStok + " Unit";

    
    if (angkaStok <= 0) {
        const badge = cardAktif.querySelector(".badge");
        badge.textContent = "Stok Habis";
        badge.classList.add("badge-habis");
        const tombol = cardAktif.querySelector(".btn-detail");
        tombol.textContent = "Stok Habis";
        tombol.classList.add("habis");
        tombol.disabled = true;
    }

    popup.classList.remove("muncul");
});

const tombolFilter = document.querySelectorAll('.filter');
const barisTabel = document.querySelectorAll('#tabelRiwayat tbody tr');
const teksJumlah = document.getElementById('jumlahData');

tombolFilter.forEach(tombol => {
    tombol.addEventListener('click', () => {
        
        tombolFilter.forEach(t => t.classList.remove('aktif'));
        tombol.classList.add('aktif');

        const filter = tombol.getAttribute('data-filter');
        let ketemu = 0;

        barisTabel.forEach(baris => {
            if (filter === 'semua' || baris.getAttribute('data-status') === filter) {
                baris.style.display = '';
                ketemu++;
            } else {
                baris.style.display = 'none';
            }
        });

        teksJumlah.textContent = ketemu + ' Rekaman Ditemukan';
    });
});


const inputCari = document.getElementById('cariBarang');
inputCari.addEventListener('input', () => {
    const kata = inputCari.value.toLowerCase();
    barisTabel.forEach(baris => {
        const nama = baris.getAttribute('data-nama');
        if (nama.includes(kata)) {
            baris.style.display = '';
        } else {
            baris.style.display = 'none';
        }
    });
});


var tombolMata = document.getElementById('tombolMata');

if (tombolMata) {
  tombolMata.addEventListener('click', function() {
    var inputPassword = document.getElementById('password');
    var gambarMata = document.getElementById('gambarMata');

    if (inputPassword.type == 'password') {
      
      inputPassword.type = 'text';
      gambarMata.src = '../asset/mataCoret.png';
      gambarMata.alt = 'Sembunyikan password';
    } else {
      
      inputPassword.type = 'password';
      gambarMata.src = '../asset/mata.png';
      gambarMata.alt = 'Lihat password';
    }
  });
}


function semuaAngka(teks) {
  for (var i = 0; i < teks.length; i++) {
    var huruf = teks.charAt(i);
    if (huruf < '0' || huruf > '9') {
      return false;
    }
  }
  return true;
}


var formLogin = document.getElementById('formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var pesan = document.getElementById('pesan');

    pesan.className = 'pesan';

    
    if (email.indexOf('@') > 0) {
      
    } else {
      pesan.innerHTML = 'Format email belum benar.';
      return;
    }

    
    if (password == '') {
      pesan.innerHTML = 'Password wajib diisi.';
      return;
    }

    // HUBUNGKAN KE BACKEND
    pesan.className = 'pesan pesanSukses';
    pesan.innerHTML = 'Data login valid, belum terhubung ke backend.';
  });
}


var formDaftar = document.getElementById('formDaftar');

if (formDaftar) {
  formDaftar.addEventListener('submit', function(e) {
    e.preventDefault();

    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var alamat = document.getElementById('alamat').value;
    var pesan = document.getElementById('pesan');

    pesan.className = 'pesan';

    
    if (nama == '') {
      pesan.innerHTML = 'Nama lengkap wajib diisi.';
      return;
    }

    
    if (nim.length < 8 || nim.length > 12 || semuaAngka(nim) == false) {
      pesan.innerHTML = 'NIM harus angka, 8 sampai 12 digit.';
      return;
    }

    
    if (email.indexOf('@') > 0) {
      
    } else {
      pesan.innerHTML = 'Format email belum benar.';
      return;
    }

    
    if (password.length < 8) {
      pesan.innerHTML = 'Password minimal 8 karakter.';
      return;
    }

    
    if (alamat.length < 10) {
      pesan.innerHTML = 'Alamat terlalu pendek.';
      return;
    }

    // HUBUNGKAN KE BACKEND
    alert('Akun berhasil dibuat. Silakan masuk.');
    window.location.href = 'login.html';
  });
}

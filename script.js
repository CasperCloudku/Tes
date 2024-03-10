const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    let time = new Date()
    let hour = time.getHours()

    // Mengubah efek saat scroll menjadi malam
    if (hour >= 18 || hour <= 6) {
        document.body.style.backgroundColor = '#000'; // Ubah warna background menjadi hitam saat malam
        // Tambahkan efek lain yang diinginkan saat malam
    } else {
        document.body.style.backgroundColor = '#fff'; // Kembalikan warna background ke putih saat siang
        // Hapus efek malam yang telah ditambahkan sebelumnya
    }

    // Implementasi perubahan elemen lain sesuai kebutuhan
    title.style.marginTop = value * 1.1 + 'px';
    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';
    bush2.style.marginBottom = -value + 'px';
    mount1.style.marginBottom = -value * 1.1 + 'px';
    mount2.style.marginBottom = -value * 1.2 + 'px';

    // Tampilkan judul dengan efek fade-in saat mencapai bagian home
    if (value >= 200) { // Ubah nilai ambang sesuai dengan kebutuhan Anda
        title.classList.remove('show');
    } else {
        title.classList.add('show');
    }
})

// Ini Javascript

// Autoslider
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        // Menyembunyikan gambar sebelumnya
        slides[currentIndex].classList.remove('active');
        
        // Mengubah indeks gambar berikutnya
        currentIndex = (currentIndex + 1) % totalSlides;
        
        // Menampilkan gambar berikutnya
        slides[currentIndex].classList.add('active');
    }

    // Menampilkan gambar pertama
    slides[currentIndex].classList.add('active');

    // Menjalankan autoslide setiap 3 detik
    setInterval(showNextSlide, 3000);
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();
    
    // Lakukan validasi form di sini
    if (!name){
        alert('Name is required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (!interest) {
        alert('Please select an interest from the dropdown!');
        return;
    }

    if (!message) {
        alert('Message cannot be empty!');
        return;
    }

    // Jika semua validasi lolos
    alert('Thank you for your submission, ' + name + '! Our sales team will contact you within 24 hours.');
    event.target.reset(); // Reset form setelah sukses
})

// Fungsi untuk validasi email
function validateEmail(email) {
    // Regex untuk memvalidasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
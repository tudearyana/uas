document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ['YEC SEMESTA SMK N 1 MAS UBUD: IMPLEMENTASI LULUSAN LEBIH DEKAT DENGAN “BMW”', 'PEMBUKAAN MPLS SMK N 1 MAS UBUD TAHUN 2023', '“SEMOGA AJEG DAN LESTARI BAHASA IBUKU” BULAN BAHASA BALI KE-LIMA DI SMKN 1 MAS UBUD'];
    let index = 0;
    const textElement = document.getElementById('animated-text');

    function changeText() {
        textElement.innerHTML = `<span>${texts[index]}</span>`;
        index = (index + 1) % texts.length;
    }

    changeText(); // Initialize with the first text
    setInterval(changeText, 2000); // Change text every 2 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById('currentDate');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = currentDate.toLocaleDateString('id-ID', options);
});

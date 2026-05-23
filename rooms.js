// Səhifədəki bütün 10 otağı tapırıq
const containers = document.querySelectorAll('.shelby-container');

containers.forEach((container) => {
    // Hər otağın öz daxilindəki şəkilləri tapırıq
    const slides = container.querySelectorAll('.slides img');
    let currentIndex = 0;

    // Əgər otaqda şəkil varsa, funksiyanı başladırıq
    if (slides.length > 0) {
        function nextSlide() {
            // Hazırkı şəkli gizlət
            slides[currentIndex].classList.remove('active');

            // Növbəti indeksə keç (əgər sondursa, 0-a yəni başa qayıt)
            currentIndex = (currentIndex + 1) % slides.length;

            // Yeni şəkli göstər
            slides[currentIndex].classList.add('active');
        }

        // Hər otaq özü üçün 3.5 saniyədən bir dəyişsin
        setInterval(nextSlide, 3500);
    }
});
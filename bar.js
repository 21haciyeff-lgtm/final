// Səbətin ümumi məbləğini saxlayan dəyişən
let totalAmount = 0;

/**
 * HTML-dəki butonların çağırdığı əsas funksiya
 * @param {string} name - Məhsulun adı (məsələn: 'portağal', 'tommy')
 * @param {number} price - Məhsulun qiyməti (məsələn: 18.00, 130.00)
 */
function add(name, price) {
    // 1. Gələn qiyməti ümumi məbləğin üzərinə gəlirik
    totalAmount += price;

    // 2. HTML-dəki id="total" olan elementi tapırıq
    const totalSpan = document.getElementById("total");

    if (totalSpan) {
        // 3. Qiyməti nöqtədən sonra 2 rəqəm olacaq şəkildə (məs: 15.00) ekrana yazdırırıq
        totalSpan.innerText = totalAmount.toFixed(2);
    } else {
        console.error("Xəta: HTML daxilində id='total' olan element tapılmadı!");
    }
}
let total = 0;
let items = [];

function add(name, price) {
    // NaN olmaması üçün qiyməti rəqəmə çeviririk
    let p = parseFloat(price);

    if (!isNaN(p)) {
        total += p;
        items.push(name);

        // Qiyməti ekranda yenilə (id="total" olan yerə yazır)
        document.getElementById('total').innerText = total.toFixed(2);

        // Nə əlavə olunduğunu ekranda göstər
        alert("Əlavə edildi: " + name + "\nSəbət: " + items.join(", "));
    } else {
        console.error("Qiymət düzgün deyil!");
    }
}
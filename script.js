let endDate = new Date("December 31, 2026 23:59:59").getTime();

setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    document.getElementById("countdown").innerHTML =
        days + " kun " + hours + " soat qoldi";
}, 1000);

let cartCount = 0;

// 🛒 Savatga qo‘shish
function addToCart(productName, price) {
    cartCount++;

    alert(
        productName +
        " savatga qo‘shildi!\nNarxi: " +
        price +
        " so'm\nJami mahsulotlar: " +
        cartCount
    );

    updateCartUI();
}

// 🧾 Cart UI yangilash (agar keyin qo‘shmoqchi bo‘lsang)
function updateCartUI() {
    console.log("Savatdagi mahsulotlar soni: " + cartCount);
}

// ⏳ Aksiya countdown (sales sahifasi uchun)
function startCountdown() {
    let endDate = new Date("December 31, 2026 23:59:59").getTime();

    setInterval(function () {
        let now = new Date().getTime();
        let distance = endDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML =
                "Aksiya tugadi!";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        let minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        document.getElementById("countdown").innerHTML =
            days + " kun " + hours + " soat " + minutes + " daqiqa qoldi";
    }, 1000);
}

// 📌 Sahifa yuklanganda avtomatik ishlash
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("countdown")) {
        startCountdown();
    }
});
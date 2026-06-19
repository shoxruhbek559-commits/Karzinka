let cartCount = 0;
let cartTotal = 0;
let countdownInterval;

/* 🛒 SAVATGA QO‘SHISH */
function addToCart(productName, price) {
    cartCount++;
    cartTotal += price || 0;

    alert(
        productName +
        " savatga qo‘shildi!\n" +
        "Narxi: " + (price || 0) + " so'm\n" +
        "Jami mahsulot: " + cartCount
    );

    updateCartUI();
}

/* 🧾 CART UI (agar element bo‘lsa) */
function updateCartUI() {
    const el = document.getElementById("cart");

    if (el) {
        el.innerText = "Savat: " + cartCount;
    }
}

/* ⏳ COUNTDOWN */
function startCountdown() {
    const endDate = new Date("December 31, 2026 23:59:59").getTime();

    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = endDate - now;

        const el = document.getElementById("countdown");

        if (!el) return;

        if (distance < 0) {
            clearInterval(countdownInterval);
            el.innerHTML = "Aksiya tugadi!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) /
            (1000 * 60));

        el.innerHTML =
            days + " kun " + hours + " soat " + minutes + " daqiqa qoldi";
    }, 1000);
}

/* 🚀 AUTO START */
document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
});

/* 👋 WELCOME MESSAGE (HTML bilan mos) */
function showMessage() {
    alert("Saytimizga xush kelibsiz!");
}

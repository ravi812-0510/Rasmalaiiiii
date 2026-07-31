const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const typing = document.getElementById("typing");
const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

const letter = `Dear Rasmalaiiiii ❤️

You are my happiest place, my biggest smile, and my sweetest memory.

Every moment with you feels magical.

Thank you for filling my life with love, happiness, and endless smiles.

I promise to stand by your side, support you, and love you with all my heart.

Happy Girlfriend's Day, My Love. ❤️

Forever Yours,
Sweetuu 💕`;

startBtn.addEventListener("click", () => {
    welcome.style.display = "none";
    main.classList.remove("hidden");
    typeLetter();
});

function typeLetter() {
    let i = 0;
    typing.innerHTML = "";

    const interval = setInterval(() => {
        if (i < letter.length) {
            typing.innerHTML += letter.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 40);
}

giftBtn.addEventListener("click", () => {

    giftMessage.classList.remove("hidden");

    setTimeout(() => {
        giftMessage.classList.add("show");
    }, 50);

    for (let i = 0; i < 40; i++) {
        createHeart();
    }

});
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 600);
const message = `My Dearest Rasmalaiiiii,

From the day you came into my life, everything became brighter.
Every smile of yours makes my heart happy, and every memory with you is a treasure I will always keep.

Thank you for loving me, supporting me, and standing by my side.
You are my happiness, my peace, and my favorite person.

This little website is made only for you because you deserve something as special as you are.

I Love You Forever ❤️`;

const typewriter = document.getElementById("typewriter");
const signature = document.getElementById("signature");

function startLoveLetter() {
    if (!typewriter) return;

    let i = 0;
    typewriter.innerHTML = "";

    function type() {
        if (i < message.length) {
            if (message.charAt(i) === "\n") {
                typewriter.innerHTML += "<br>";
            } else {
                typewriter.innerHTML += message.charAt(i);
            }
            i++;
            setTimeout(type, 40);
        } else {
            signature.style.display = "block";
        }
    }

    type();
}

const envelope = document.getElementById("envelope");
const loveLetter = document.querySelector(".love-letter");

if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        document.querySelector(".envelope-text").style.display = "none";

        loveLetter.style.display = "flex";

        startLoveLetter();
    });
}
function openHeart(){

    document.getElementById("heartMessage").style.display = "block";

}
// Days Together Counter
const startDate = new Date("2025-08-16"); // Change this to your anniversary date if needed

const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

const daysElement = document.getElementById("days");

if (daysElement) {
    daysElement.textContent = diffDays;
}
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));

    if (pages[index]) {
        pages[index].classList.add("active");
    }
}

if (pages.length > 0) {
    showPage(currentPage);
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
}

// ===============================
// Foto
// ===============================

const photos = document.querySelectorAll(".gallery img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        window.open(photo.src, "_blank");

    });

});

// ===============================
// Judul
// ===============================

setInterval(() => {

    document.title =
    document.title === "❤️ Piura Gallery ❤️"
    ? "I Love You ❤️"
    : "❤️ Piura Gallery ❤️";

}, 2000);

// ===============================
// Musik
// ===============================

const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusic");
const overlay = document.getElementById("musicOverlay");

let autoScroll;

playBtn.addEventListener("click", async () => {
    try {
        await music.play();

        overlay.style.display = "none";

        // Mulai auto scroll
        mulaiAutoScroll();

    } catch (error) {
        alert("Musik gagal diputar.");
        console.error(error);
    }
});

function mulaiAutoScroll() {

    autoScroll = setInterval(() => {

        window.scrollBy({
            top: 1,
            left: 0,
            behavior: "smooth"
        });

        // Berhenti di bagian paling bawah
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
            clearInterval(autoScroll);
        }

    }, 20);

}
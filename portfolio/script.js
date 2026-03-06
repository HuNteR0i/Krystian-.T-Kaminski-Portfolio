const items = document.querySelectorAll("#div_py, #div_cpp, #div_webb, #div_home, #div_skill");
const setting = document.getElementById("setting");
const body = document.body;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

items.forEach(item => {
    let timeout;

    // HOVER
    item.addEventListener("mouseover", () => {
        clearTimeout(timeout);
        item.classList.add("active");
    });

    item.addEventListener("mouseout", () => {
        timeout = setTimeout(() => {
            item.classList.remove("active");
        }, 500);
    });

    // LOSOWY GLITCH
    function randomGlitch() {
        if (Math.random() < 0.5) { // 50% szans
            item.classList.add("glitch");
            setTimeout(() => item.classList.remove("glitch"), 120);
        }
        setTimeout(randomGlitch, getRandomInt(1000, 4000)); // losowy czas
    }

    randomGlitch();
});

// Przełącznik trybu light/dark
setting.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});


// Po załadowaniu strony ustaw motyw i język
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");
    }
});

const buttons = document.querySelectorAll(".skill-btn");
const sections = document.querySelectorAll(".dev-progress");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const skill = btn.dataset.skill;

        // reset
        buttons.forEach(b => b.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        // aktywuj kliknięty
        btn.classList.add("active");
        document.querySelector(`.dev-progress[data-skill="${skill}"]`).classList.add("active");
    });
});

// domyślnie pokaż C++
document.querySelector('.skill-btn[data-skill="cpp"]').click();

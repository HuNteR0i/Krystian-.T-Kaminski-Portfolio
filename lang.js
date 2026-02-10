
// Obiekt tłumaczeń
const translations = {

    Kalkulator_code: { pl: `Kalkulator (kod)`, en: `Calculator (code)` },

    rand_name_code: { pl: `Losowe nazwy (kod)`, en: `Random Names (code)` },

    rand_name: { pl: `Kalkulator:
Ten kalkulator to mój pierwszy program PY.
Jest trudny w obsłudze.`, en: `Calculator:
This calculator is my first PY program.
It's difficult to use.` },

    kalkulator: { pl: `Losowe nazwy:
Ten program losowo wybiera nazwy z listy.`, en: `Random Names:
This program randomly selects names from a list.` },

    name: { pl: `Imię: Hunter`, 
en: `NAME: Hunter` },
    
    birthdate: { pl: `Data urodzenia:
06/12/09`, 
        en: `Birthdate:
 06/12/09` },

    school: { pl: `Obecna Szkoła:
LBS Halmstad`,
          en: `Current School:
LBS Halmstad` },

    location: { pl: `Lokalizacja: 
Szwecia`, en: `Location: 
Sweden` },

webb_1: { pl: `Pracuję w
webb-development
od nieco ponad roku.`, en: `I've been at
webb-development
for just over a year.` },

webb_2: { 
pl: `tworzenie stron 
internetowych
nie jest moim
głównym
obszarem
zainteresowań`, 
en: `web development,
is not my
main area of
interest` },

    py_1: { pl: `Znam ten język od roku.` , en: `I have known this language for a year.` },
    py_2: { pl: `to jest mój drugi język.` , en: `this is my second language.` },
    py_3: { pl: `Uczę się obsługi biblioteki pybind11 w celu połączenia PY z C++.` , en: `I am learning the pybind11 library to connect PY to C++.` },

    about_me_1: { pl: `Jestem samoukiem, który robi duże postępy w swojej karierze.`
        , en: `I am self-taught and making great progress in my career.` },

    about_me_2: { pl: `Moim głównym językiem jest C++, ale znam zarówno Pythona, jak i języki programowania stron internetowych.`
        , en: `My primary language is C++, but I know both Python and web development languages.` },

    about_me_3: { pl: `Szybko uczę się nowych języków i technologii, ale nie lubię pracować z językami takimi jak C#.`
        , en: `I'm quick to learn new languages ​​and technologies, but I don't like working with languages ​​like C#.` },

    about_me_4: { pl: `Moja kariera jest młoda, ale rozwija się dynamicznie. Podejrzewam, że osiągnę poziom średni tego lata.`
        , en: `My career is young, but it's developing rapidly. I suspect I'll reach mid-level this summer.` },

    about_me: {
        pl: `O mnie:`,en: `About me:` },

    webb: { pl: "Nie ma żadnych projektów", en: "There are no projects" },
    webb_info: {
     pl: `Ta strona internetowa to mój pierwszy konkretny projekt webowy.
    Pozostałe moje projekty to głównie proste strony HTML i CSS, których używałem do nauki tych języków.`,
     en: `This website is my first specific web development project.
    The rest of my projects are mostly simple HTML, CSS and JS pages, which I used to learn these languages.` },

    home: { pl: "HOME", en: "HOME" },
    py: { pl: 'print("PY")', en: 'print("PY")' },
    html: { pl: "HTML", en: "HTML" },

    Samodzielność: { pl: "Samodzielność", en: "Independence" },
    Struktura: { pl: "Struktura", en: "Structure" },

    cpp_experience: { pl: "Znam jezyk C++ od 2 lat", en: "I have known C++ for 2 years" },
    main_language: { pl: "To jest moim glowny jezyk.", en: "It's my main language." },
    program_structure: { pl: "Moje programy bazuja na strukturze C++", en: "My programs are based on C++ structure" },

    guess_the_number_link: { pl: "GUESS THE NUMBER  (kod)", en: "GUESS THE NUMBER  (code)" },
    tic_tac_toe_link: { pl: "Kółko i krzyżyk  (kod)", en: "TIC TAC TOE  (code)" },

    tic_tac_toe: {
        pl: `Kółko i krzyżyk:
Ten projekt to krok naprzód w mojej karierze programisty C++.
Dzięki temu programowi chciałem inaczej spojrzeć na programowanie.`,
        en: `Tic-Tac-Toe:
This project is a leap forward in my career as a C++ programmer.
With this program, I aimed to think differently about programming.`
    },
    guess_the_number: {
        pl: `Guess The Number:
To był mój pierwszy samodzielny projekt w C++.`,
        en: `Guess The Number:
This was my first standalone C++ project.`
},
};

// Funkcja tłumacząca
function translate(lang) {
    const elements = document.querySelectorAll("[data-text]");
    elements.forEach(el => {
        const key = el.getAttribute("data-text");
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });
    localStorage.setItem("lang", lang);
}



// Obsługa przycisków językowych
document.getElementById("btn_pl").addEventListener("click", () => translate("pl"));
document.getElementById("btn_en").addEventListener("click", () => translate("en"));

window.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
    translate(lang);
});

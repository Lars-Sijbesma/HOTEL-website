const translations = {
    nl: {
        selct: "Kies een taal",
        title: "welkom",
        pargr: "Hallo ik ben tycho"
    },
    en: {
        selct: "Select a Language",
        title: "Welcome",
        pargr: "Hello my name is tycho"
    }
}
const languageSelectop = document.querySelector("select");
let h1 = document.getElementById("h1")
let title = document.getElementById("title")
let par = document.getElementById("par")

languageSelectop.addEventListener("change", (event) => {
    SetLanguage(event.target.value)
})

const SetLanguage = (language) => {
    if(language == "en"){
        h1.innerText = translations.en.selct;
        title.innerText = translations.en.title;
        par.innerText = translations.en.pargr
    }else if (language =="nl"){
        h1.innerText = translations.nl.selct;
        title.innerText = translations.nl.title;
        par.innerText = translations.nl.pargr
    }
}
// Hier definieer je alle teksten voor Nederlands (nl) en Engels (en)
const translations = {
    nl: {
        // Pagina titel en introductie
        contact_title: "Contact Opnemen",
        contact_text: "Heb je vragen over het hotel of problemen? Laat het ons weten!",
        
        // Contactinformatie sectie
        contact_info_title: "Onze Gegevens",
        location_label: "Locatie:",
        location_text: "HotelStraat 987, 1500 HB Alkmaar",
        email_label: "Email:",
        email_text: "Hotel@outlook.com",
        hours_label: "Openingstijden:",
        hours_text: "6 AM - 12 AM",

        // Formulier labels en placeholders
        email_field: "Email Adres",
        subject_field: "Onderwerp",
        subject_general: "Algemene vraag",
        subject_payment: "Problemen met betaling",
        subject_refund: "Terugbetaling",
        message_field: "Bericht",
        message_placeholder: "Typ hier je bericht...",
        submit_button: "Verstuur bericht"
    },
    en: {
        contact_title: "Contact Us",
        contact_text: "Do you have questions about the hotel or problems? Let us know!",
        contact_info_title: "Our Information",
        location_label: "Location:",
        location_text: "HotelStreet 987, 1500 HB Alkmaar",
        email_label: "Email:",
        email_text: "Hotel@outlook.com",
        hours_label: "Opening Hours:",
        hours_text: "6 AM - 12 AM",
        email_field: "Email Address",
        subject_field: "Subject",
        subject_general: "General Question",
        subject_payment: "Payment Issues",
        subject_refund: "Refund",
        message_field: "Message",
        message_placeholder: "Type your message here...",
        submit_button: "Send Message"
    }
};

// FUNCTIE OM DE TAAL IN TE STELLEN
// Deze functie zoekt alle elementen met data-translate, data-translate-placeholder of data-translate-value
// en vervangt hun tekst, placeholder of value door de juiste vertaling
function setLanguage(lang) {
    // Vertaal innerText van alle elementen
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate; // Haal de sleutel op van data-translate
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key]; // Vervang tekst
        }
    });

    // Vertaal placeholders van input of textarea
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.dataset.translatePlaceholder; // Haal de sleutel op
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key]; // Vervang placeholder
        }
    });

    // Vertaal value van input/button
    document.querySelectorAll("[data-translate-value]").forEach(el => {
        const key = el.dataset.translateValue; // Haal de sleutel op
        if (translations[lang] && translations[lang][key]) {
            el.value = translations[lang][key]; // Vervang value
        }
    });

    // Vertaal select opties
    document.querySelectorAll("select [data-translate]").forEach(el => {
        const key = el.dataset.translate; // Haal de sleutel op
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key]; // Vervang de tekst in option

        }
    });
}

// LAAD DE GESAVEDE TAAL OF STANDAARD NAAR NEDERLANDS
// LocalStorage onthoudt de taal van de gebruiker
const savedLang = localStorage.getItem("lang") || "nl";
setLanguage(savedLang); // Pas direct de taal toe bij het laden van de pagina

// TAAL SELECTIE DROPDOWN HANDLER
// Deze code zorgt dat wanneer de gebruiker een andere taal kiest,
// de pagina automatisch vertaald wordt en de keuze wordt opgeslagen
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
    languageSelect.value = savedLang; // Zet de dropdown op de opgeslagen taal

    languageSelect.addEventListener("change", e => {
        const newLang = e.target.value; // Nieuwe geselecteerde taal
        localStorage.setItem("lang", newLang); // Sla op in LocalStorage
        setLanguage(newLang); // Pas vertaling toe
    });
}

const translations = {
    nl: {
        general_title: "Algemeen",
        booking_policy: "Boekingsbeleid",
        booking_policy_text: "Reserveringen kunnen online of telefonisch worden gemaakt. Een reservering is pas definitief na bevestiging door ons. Annuleringen moeten binnen de aangegeven termijn worden doorgegeven.",
        payment: "Betaling",
        payment_text: "Wij accepteren contant geld en de meeste gangbare creditcards en betaalpassen. Betaling dient te worden voldaan bij aankomst of vertrek, tenzij anders afgesproken.",
        smoking: "Roken",
        smoking_text: "Ons hotel is volledig rookvrij. Roken is alleen toegestaan in de aangewezen buitenruimtes. Bij overtreding kunnen extra schoonmaakkosten in rekening worden gebracht.",

        hotel_title: "Hotel",
        checkin: "Inchecken/Uitchecken",
        checkin_text: "Check-in is mogelijk vanaf 15:00 uur. Check-out dient te gebeuren vóór 11:00 uur. Vroeg inchecken of laat uitchecken is mogelijk op aanvraag en afhankelijk van beschikbaarheid.",
        parking: "Parkeren",
        parking_text: "Er is parkeergelegenheid beschikbaar voor gasten. Parkeren kan gratis of tegen betaling, afhankelijk van het type reservering en beschikbaarheid.",
        amenities: "Voorzieningen",
        amenities_text: "Wij bieden diverse voorzieningen zoals gratis wifi, airconditioning, toiletartikelen, handdoeken en dagelijkse schoonmaakservice.",
        special_requests: "Speciale verzoeken",
        special_requests_text: "Speciale verzoeken zoals extra bedden, dieetwensen of kamerpreferenties kun je bij het boeken aangeven. Wij doen ons best om hieraan te voldoen, afhankelijk van beschikbaarheid.",

        restaurant_title: "Restaurant",
        reservations: "Reserveringen",
        reservations_text: "Reserveren voor het restaurant wordt aangeraden, vooral in het weekend en tijdens drukke periodes. Reserveringen kunnen online of telefonisch worden gemaakt.",
        hours: "Openingstijden",
        hours_text: "Het restaurant is dagelijks geopend. De exacte openingstijden kunnen variëren op feestdagen. normale tijden zijn 7:00-10:30 ontbijt 12:00-15:00 lunch 18:00-22:00 diner",
        menu: "Menu",
        menu_text: "Ons menu biedt een selectie van voor-, hoofd- en nagerechten, inclusief vegetarische opties. Het menu kan seizoensgebonden wijzigen.",
        events: "Evenementen",
        events_text: "Wij organiseren regelmatig speciale evenementen zoals diners, feesten en zakelijke bijeenkomsten. Neem contact met ons op voor mogelijkheden en arrangementen.",
        takeaway: "Afhalen",
        takeaway_text: "Afhaalmaaltijden zijn beschikbaar tijdens openingstijden van het restaurant. Bestellingen kunnen vooraf telefonisch worden geplaatst."
    },

    en: {
        general_title: "General",
        booking_policy: "Booking Policy",
        booking_policy_text: "Reservations can be made online or by phone. A reservation is only final after confirmation by us. Cancellations must be made within the specified deadline.",
        payment: "Payment",
        payment_text: "We accept cash and most common credit and debit cards. Payment must be made upon arrival or departure, unless otherwise agreed.",
        smoking: "Smoking",
        smoking_text: "Our hotel is completely non-smoking. Smoking is only allowed in designated outdoor areas. Additional cleaning fees may be charged in case of violation.",

        hotel_title: "Hotel",
        checkin: "Check-in/Check-out",
        checkin_text: "Check-in is possible from 3:00 PM. Check-out must take place before 11:00 AM. Early check-in or late check-out is possible on request and depending on availability.",
        parking: "Parking",
        parking_text: "Parking is available for guests. Parking may be free or charged, depending on the type of reservation and availability.",
        amenities: "Amenities",
        amenities_text: "We offer various amenities such as free Wi-Fi, air conditioning, toiletries, towels, and daily cleaning service.",
        special_requests: "Special Requests",
        special_requests_text: "Special requests such as extra beds, dietary wishes or room preferences can be indicated when booking. We do our best to accommodate these depending on availability.",

        restaurant_title: "Restaurant",
        reservations: "Reservations",
        reservations_text: "Reservations for the restaurant are recommended, especially on weekends and during busy periods. Reservations can be made online or by phone.",
        hours: "Opening Hours",
        hours_text: "The restaurant is open daily. Exact opening hours may vary on holidays. normally open for breakfast from 7 AM - 10:30 AM for lunch 12 PM - 3 PM and dinner 6 PM - 10 PM.",
        menu: "Menu",
        menu_text: "Our menu offers a selection of starters, main courses and desserts, including vegetarian options. The menu may change seasonally.",
        events: "Events",
        events_text: "We regularly organize special events such as dinners, parties and business meetings. Contact us for possibilities and arrangements.",
        takeaway: "Takeaway",
        takeaway_text: "Takeaway meals are available during restaurant opening hours. Orders can be placed by phone in advance."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}


const savedLang = localStorage.getItem("lang") || "nl";
setLanguage(savedLang);

const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
    languageSelect.value = savedLang;

    languageSelect.addEventListener("change", e => {
        const newLang = e.target.value;
        localStorage.setItem("lang", newLang);
        setLanguage(newLang);
    });
}

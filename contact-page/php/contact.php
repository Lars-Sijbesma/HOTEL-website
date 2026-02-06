<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/contact.css">
</head>

<body>
    <?php include("../header.php"); ?>
    <body style="background-image: url('../images/contact-page.jpg'); background-size: cover;">
    <main class="container">
        <h1 data-translate="contact_title">Contact Opnemen</h1>
        <p data-translate="contact_text">Heb je vragen over het hotel of problemen? Laat het ons weten!</p>

        <section class="contact-info">
            <h2 data-translate="contact_info_title">Onze Gegevens</h2>
            <ul>
                <li><strong data-translate="location_label">Locatie:</strong>HotelStraat 987, 1500 HB Alkmaar</li>
                <li><strong data-translate="email_label">Email:</strong> Hotel@outlook.com</li>
                <li><strong data-translate="hours_label">Openingstijden:</strong> 6 AM - 12 AM</li>
            </ul>
        </section>
        <form action="send-contact.php" method="post">
            <label data-translate="email_field">Email Adres </label>
            <input type="email" name="email" placeholder="naam@voorbeeld.nl" required>

            <label data-translate="subject_field">Onderwerp</label>
            <select name="onderwerp">
                <option value="vraag" data-translate="subject_general">Algemene vraag</option>
                <option value="betaling" data-translate="subject_payment">Problemen met betaling</option>
                <option value="terugbetaling" data-translate="subject_refund">Terugbetaling</option>
            </select>
            <label data-translate="message_field">Bericht</label>
            <textarea name="bericht" rows="5" placeholder="Typ hier je bericht..." required data-translate="message_placeholder"></textarea>
            <input class="save-button" type="submit" value="Verstuur bericht" data-translate="submit-button">
        </form>
    </main>
    <script src="../js/multi-language.js"></script>
</body>
</html>
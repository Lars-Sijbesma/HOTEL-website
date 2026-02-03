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
    <body style="background-image: url('../images/contact-page.jpg'); background-size: cover;">
    <header>
        <nav><a href="">Home</a><a href="">Restaurant</a><a href="">Kamers</a><a href="">Over ons </a><a href="">Contact
            </a></nav>
    </header>
    <main class="container">
        <h1>Contact Opnemen</h1>
        <p>Heb je vragen over het hotel of problemen? Laat het ons weten!</p>

        <section class="contact-info">
            <h2>Onze Gegevens</h2>
            <ul>
                <li><strong>Locatie:</strong> HotelStraat 987, 1500 HB Alkmaar</li>
                <li><strong>Email:</strong> Hotel@outlook.com</li>
                <li><strong>Openingstijden:</strong> 6 AM - 12 AM</li>
            </ul>
        </section>
        <form action="send-contact.php" method="post">
            <label>Email Adres </label>
            <input type="email" name="email" placeholder="naam@voorbeeld.nl" required>

            <label>Onderwerp</label>
            <select name="onderwerp">
                <option value="vraag">Algemene vraag</option>
                <option value="betaling">Problemen met betaling</option>
                <option value="terugbetaling">Terugbetaling</option>
            </select>
            <label>Bericht</label>
            <textarea name="bericht" rows="5" placeholder="Typ hier je bericht..." required></textarea>
            <input class="save-button" type="submit" value="Verstuur bericht">
        </form>
    </main>
</body>
</html>
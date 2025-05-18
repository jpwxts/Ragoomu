<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ragoomu | Contact Us</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <link rel="icon" href="images/Ragoomu [Logo].png" sizes="32x32" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1><img class="img-logo" src="images/Ragoomu [Logo].png" alt="Logo">
            <img class="img-namelogo" src="images/Ragoomu [Name Logo].png" alt="Namelogo"></h1>
        <nav id="main-nav">
            <div class="topnav"><ul>
                <li><a href="home.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="products.php">Products</a></li>
                <li><a href="branches.php">Branches</a></li>
                <li><a href="contact.php">Contact Us</a></li>
            </ul></div>
        </nav>
        <form id="search-form" onsubmit="return handleSearch(event)">
            <input type="text" id="search-box" placeholder="What are you looking for?">
            <button type="submit">Search</button>
        </form>
    </header>
    <main>

        >
        <h2>Want to share something to Ragoomu? Message us and we'll get back to you soon as we can!
        </h2>
        <div class="QRcode"><p><img src="images/RagoomuQR.png" alt="QRcode"></p></div>
        
    <div class="contact-form"><form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Send Message</button>
    </form></div>
    </main>
    <footer>
        <p>&copy; 2025 Ragoomu. All rights reserved.</p>
    </footer>
</body>
</html>
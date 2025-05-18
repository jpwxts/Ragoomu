<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ragoomu | Local Comfort Food Restaurant</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <link rel="icon" href="images/Ragoomu [Logo].png" sizes="32x32" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1><div><img class="img-logo" src="images/Ragoomu [Logo].png" alt="Logo">
        <img class="img-namelogo" src="images/Ragoomu [Name Logo].png" alt="Namelogo"></h1></div></h1>
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
            <button>Search</button>
        </form>
    </header>
    <main>
        <div class="Welcome"><h2>Welcome to Ragoomu!</h2></div>
        <p>Experience the comfort and joy that every Ilonggo will feel while enjoying the relaxing ambiance and sumptuous food at Ragoomu.</p>
        <div class="homevideo"><p><video autoplay muted loop  id="home-video" src="images/Ragoomu [Home Page].mp4" type="video/mp4"></video></p></div>
        
    </main>
    <footer>
        <p>&copy; 2025 Ragoomu. All rights reserved.</p>
    </footer>
</body>
</html>
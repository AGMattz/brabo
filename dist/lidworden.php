<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,700" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <title>HC Brabo - Lid Worden</title>
  </head>
  <body>
    <div class="container">
      <nav>
        <div id="navbar-mob"><a href="index.html">Home</a><a href="about.html">About</a><a href="about.html#praes">Praesidium</a><a href="about.html#pros">Pro-Senioren</a><a href="about.html#lied">Clublied</a><a href="about.html#gesch">Geschiedenis</a><a href="events.html">Kalender</a><a href="webshop.html">Webshop</a><a href="contact.html">Contact</a><a href="sponsors.html">Sponsors</a><a href="lidworden.php">Lid Worden</a><a id="ham">menu</a>
        </div>
        <div class="navbar"><a href="index.html" class="logo">HC Brabo</a>
          <div class="nav-items"><a href="about.html">About</a><a href="events.html">Kalender</a><a href="webshop.html">Webshop</a><a href="contact.html">Contact</a><a href="sponsors.html">Sponsors</a><a href="lidworden.php">Lid Worden</a>
          </div>
        </div>
      </nav>
      <section id="lidworden">
        <form action="hctemp.php" method="post">
          <h1>HC Brabo | Lid worden</h1>
          <div class="field">
            <label for="voornaam">Voornaam</label>
            <input name="voornaam" id="voornaam" type="text" required>
          </div>
          <div class="field">
            <label for="achternaam">Achternaam</label>
            <input name="achternaam" id="achternaam" type="text" required>
          </div>
          <div class="field">
            <label for="geboortedatum">Geboortedatum</label>
            <input type="date" id="geboortedatum" name="geboortedatum" required>
          </div>
          <div class="field">
            <label for="campus">Welke campus?</label>
            <select name="campus" id="campus">
                <option value="KDG">Karel De Grote Hogeschool</option>
                <option value="UA">Universiteit Antwerpen</option>
                <option value="Andere">Andere</option>
              </select>
          </div>
          <div class="field">
            <label for="richting">Richting</label>
            <input name="richting" id="richting" type="text" required>
          </div>
          <div class="field">
            <label for="jaar">In welk jaar zit je?</label>
            <input type="number" name="jaar" id="jaar" value="1" required>
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input name="email" id="email" type="email" autocomplete="off">
          </div>
          <div class="field">
            <label for="gsmnummer">GSM-nummer</label>
            <input name="gsmnummer" id="gsmnummer" type="tel" autocomplete="off" required>
          </div>
          <div class="field">
            <label for="dopen">Dopen?</label>
            <select name="dopen" id="dopen">
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="misschien">Misschien</option>
              </select>
          </div>
          <div class="field">
            <label for="sport">E-mail voor sport &amp; cultuur?</label>
            <select name="sport" id="sport">
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
              </select>
          </div>
          <div class="field">
            <label for="lidmaatschap">Wilt u Ere-lid worden?<span> (50&euro; maar heel het jaar op al onze evenementen gratis binnen)</span></label>
            <select name="lidmaatschap" id="lidmaatschap">
                <option value="Lid">Lid</option>
                <option value="Erelid">Erelid</option>
                <option value="Praesidium">Praesidium</option>
              </select>
          </div>
          <div class="field button">
            <input type="submit" value="Registreer!">
          </div>
        </form>
      </section>
      <footer>
        <div class="box">
          <h3>HC Brabo</h3>
          <p> <a href="https://www.facebook.com/hcbrabo/">facebook</a></p>
          <p>	© 2016 HC Brabo - Jordy Pereira</p>
        </div>
        <div class="box">
          <p>Salesianenlaan 90, 2660 Hoboken</p>
          <p>Antwerpen</p>
          <p><a href="mailto:info@hcbrabo.be">info@hcbrabo.be</a></p>
        </div>
      </footer>
    </div>
</body>
</html>

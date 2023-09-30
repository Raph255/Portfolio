<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
	    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="CSS/header.css">
        <link rel="stylesheet" href="CSS/formulaire.css">
	    <title>Profil</title>
        
        <script src="https://kit.fontawesome.com/d974b66ed4.js" crossorigin="anonymous"></script>
        <script> 
            var bool = new Boolean(true) ;
            function Activer() {
                bool = !bool ; /* A chaque clic, la valeur de bool est inversée */
                var e = document.getElementById("envoi");
                if (!bool) { /* Quand bool = false , le bouton est affiché */
                    e.style.display = "block";
                } else {
                    e.style.display = "none";   /* Bouton caché */
                }
            } 
            </script>
    </head>
    <body>
        <header>
            <h1> <a href="index.html">Mon Portfolio</a></h1>
            <input id="toggle" type="checkbox"></input>
            <label for="toggle" class="hamburger">
                <div class="top-bun"></div>
                <div class="meat"></div>
                <div class="bottom-bun"></div>
            </label>

            <div class="nav">
                <div class="nav-wrapper">
                        <div><a href="quisuisje.html" >Qui suis-je ? <img src="Images/quisuisje.png" alt="quisuisje" style="filter: brightness(1);"></a></div>
                        <div><a href="competences.html">  Mes compétences <img src="Images/competences.png" alt="competences" style="filter: brightness(0.9);"> </a></div>
                        <div><a href="projets.html">Mes projets<img src="Images/mesprojets.png" alt="mesprojets" style="filter: brightness(0.8);"></a></div>
                        <div><a href="mecontacter.html" id="linkpage">Me contacter <img src="Images/mecontacter.png" alt="contact" style="filter: brightness(0.9);"></a></div>
             </div>
            </div>

        </header>
        <main>
            <h2> formulaire de <strong>contact</strong> </h2>
            <form method="post">
                
                <div>
                    <input type="text" class="champ" name="prenom" placeholder="Prénom *">
                    <input type="text" class="champ" name="nom" placeholder="Nom *">
                </div>
                <div>
                    <input type="text" class="champ" name="email" placeholder="Email *" required>
                </div>
                <div>
                    <input type="text" class="champ" name="objet" placeholder="Objet" required>
                </div>
                <div>
                    <textarea name="message" id="area" placeholder="Message *" spellcheck="false" 
                    oninput='this.style.height = "";this.style.height = this.scrollHeight + 3 + "px"' required></textarea>  <!-- Code JavaScript pour la hauteur automatique-->
                </div>
                <div>

                </div>
                <div class="check">
                    <input type="checkbox" name="Check"  onclick="Activer()"><!-- Appel de fonction JS-->
                    J'accepte que mes données soient enregistrées afin que ma demande soit traitée
                </div>
                <div id="envoi">
                    <input type="submit" id="btnenvoi" name="envoi" value="ENVOYER">
                    <p> La partie PHP n'étant pas intégré au site, l'envoi du formulaire ne fonctionne pas.</p>
                </div>
            </form>
            <?php
            if (isset($_POST['message'])) {
                $retour = mail('raphael.pivot2505@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: '.$_POST['email'] . "\r\n" .$_POST['prenom']."\r".$_POST['nom'] );
                if($retour)
                    echo '<p>Votre message a bien été envoyé.</p>';
            }
            ?>
        </main>
        <footer>
            <div> <i class="fa-brands fa-facebook"></i> Facebook</div>
            <div> <i class="fa-brands fa-linkedin"></i> LinkedIn</div>
            <div> <i class="fa-solid fa-square-phone"></i> 06 52 27 19 67</div>
            <div> <i class="fa-sharp fa-solid fa-envelope"></i> raphael.pivot2505@gmail.com</div>
        </footer>
        <div id="lastdiv">
            <h3>  Raphaël PIVOT - 2023 </h3>
        </div>
    </body>    
</html>

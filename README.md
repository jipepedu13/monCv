<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon CV</title>
    <link rel="stylesheet" href="Styles/cvresp.css">
</head>
<script>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #333;
    color:rgb(230, 75, 14);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.navbar-links a {
    color:rgb(145, 117, 106);
    text-decoration: none;
    margin-right: 20px;
}

.navbar-toggle-label {
    display: none;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.photo {
    flex: 1;
    max-width: 200px;
    margin-right: 20px;
}

#retourEnHaut {
    display: none; 
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    font-size: 18px;
    padding: 10px;
    background-color: #000;
    border-radius: 10px;
    color:rgb(230, 75, 14);
    cursor: pointer;
  }
  
.photo img {
    max-width: 100%;
    border-radius: 16px;
}

.left, .right {
    flex: 1;
    margin-right: 30px;
}

h1 {
    color:rgb(26, 127, 211);
}

#jpp {
    color: black;
}

h2 {
    margin-top: 40px;
    color:blue;
    font-size:xx-large;    
}

h3 {
    margin-top: 40px;
    color:rgb(38, 130, 206);
}

ul {
    list-style: none;
    padding: 0;
}

.job, .education {
    margin-bottom: 20px;
}

.job h3, .education h3 {
    margin-top: 0;
}

#experience,
#education,
#skills {
  border: 1px solid #d1b1b1;
  padding: 20px;
  margin-bottom: 20px;
}

.li {
    list-style: none;
    font-size: larger;
    text-decoration: none;

}

.nli {
    list-style: none;
    font-size: small;
    padding-left: 20px;
}

.logos-container {
    display: flex;
}

.logo {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-right: 10px;
    object-fit: contain;
}

.logo1 {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    object-fit: contain;
}
  
@media screen and (max-width: 600px) 
{
    .header {
        flex-direction: column;
        align-items: center;
    }

     .navbar-links {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
        width: 100%;
        padding: 0;
    }    

    .navbar-toggle-label {
        display: block;
        cursor: pointer;
        font-size: 1.5em;
        margin-right: 20px;
    }

    #navbar-toggle:checked ~ .navbar-links {
        display: flex;
    }

    .photo {
        margin: 0;
        margin-bottom: 20px;
    }

    .info {
        text-align: center;
    }

    .left, .right {
        margin: 0;
    }

    .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }

    .navbar-links a {
        margin: 10px 0;
    }

    .logo {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }

    .logo1 {
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }

}
</script>
<body>
    <button id="retourEnHaut" onclick="retourEnHaut()">Retour en haut</button>
    <nav class="navbar">
        <div class="navbar-brand">
            <h1>Mon Curriculum Vitae</h1>
        </div>
        <input type="checkbox" id="navbar-toggle">
        <label for="navbar-toggle" class="navbar-toggle-label">&#9776;</label>
        <div class="navbar-links">
            <a href="#about">À propos</a>
            <a href="#experience">Expérience</a>
            <a href="#education">Formation</a>
            <a href="#skills">Compétences</a>
            <a href="https://www.linkedin.com/in/jean-paul-persiani-66021792/">LinkedIn</a>                    
        </div>
    </nav>
    <div class="container">
        <div class="header">
            <div class="photo">
                <img src="Images/PhotoJPP.jpg" alt="Ma photo">
            </div>
            <div class="info">
                <h1 id="jpp">Jean-Paul PERSIANI</h1>
                <li class="li"><strong>Développeur Front-End</strong></li>
            </div>
        </div>
        <div class="main">
            <div id="about" class="left">
            <ul>
                <h2>Informations Personnelles</h2>
                <li>Habite à Port-de-Bouc</li>
                <li>Reconnaissance : <mark><strong>travailleur handicapé</strong></mark></li>
                <li>61 ans</li>
                <li>Délégué Syndical CGT</li>
                <li>Email : <strong><a href="mailto:jp.persiani@gmail.com">jp.persiani@gmail.com</a></strong></li>
                <li>Portable : <strong>06.13.07.17.76</strong></li><br>
            </ul>
            </div>
            <div id="experience" class="right">
                <h2>Expérience professionnelle</h2>
                <div class="job">
                    <h3>ETUDES INFORMATIQUE Marseille</h3>
                    <li class="li">Analyste-Programmeur Cobol/li>
                    <li class="nli">De mars 1983 à septembre 1985</li>
                </div>
                <div class="job">
                    <h3>MIDI OXYGENE Marseille</h3>
                    <li class="li">Analyste-Programmeur Gap II</li>
                    <li class="nli">D'octobre 1985 à mai 1988</li>
                </div>
                <div class="job">
                    <h3>JET SERVICES Nice & Toulon</h3>
                    <li class="li">Correspondant Informatique</li>
                    <li class="nli">De juin 1988 à mars 1998</li>
                </div>
                <div class="job">
                    <h3>TNT Lyon</h3>
                    <li class="li">Responsable Régional Informatique</li>
                    <li class="nli">D'avril 1998 à octobre 2003</li>
                </div>
                <div class="job">
                    <h3>PHIMACOM Marseille</h3>
                    <li class="li">Technico-Commercial</li>
                    <li class="nli">De février 2004 à novembre 2009</li>
                </div>
                <div class="job">
                    <h3>SITTI Aix-en-Provence</h3>
                    <li class="li">Conseiller en Communication Digitale</li>
                    <li class="nli">De novembre 2010 à juin 2021</li>
                </div>
            </div>
            <div id="education" class="left">
                <h2>Formation</h2>
                <div class="education">
                    <h3>Lycée Jean Lurçat Martigues</h3>
                    <li class="li">Baccalauréat F1</li>
                    <li class="nli">Juin 1981</li>
                </div>
                <div class="education">
                    <h3>Institut privé CONTROL-DATA Marseille</h3>
                    <li class="li">Diplôme d’analyste-programmeur</li>
                    <li class="nli">De septembre 1981 à avril 1982</li>
                </div>               
                <div class="education">
                    <h3>CNAM Nice</h3>
                    <li class="li">DUT Informatique d'entreprise</li>
                    <li class="nli">De septembre 1983 à juin 1985</li>
                </div>
                <div class="education">
                    <h3>Université Marseille 2</h3>
                    <li class="li">DESS d'aide à la décision & NTIC</li>
                    <li class="nli">De septembre 1996 à juin 1997</li>
                </div>
            </div>
            <div id="skills" class="right">
                <h2>Compétences Techniques</h2>
                <div class="logos-container">
                    <img src="Images/Html5.png" alt="HTML 5" class="logo">
                    <img src="Images/Css3.png" alt="CSS 3" class="logo">
                    <img src="Images/Js.png" alt="JavaScript" class="logo">
                    <img src="Images/React.png" alt="React.JS" class="logo">
                    <img src="Images/VsCode.jpg" alt="VS Code" class="logo">     
                </div>           
                <h2>Autres Compétences</h2>
                <div class="logos-container">
                    <img src="Images/Anglais.jpg" alt="Anglais N2" class="logo1">
                    <img src="Images/Italien.jpg" alt="Italien N2" class="logo1">
                    <img src="Images/Drone.jpg" alt="Télépilote Drone Amateur" class="logo1">
                    <img src="Images/Rando.jpg" alt="Randonneur Pédestre" class="logo1">
                    <img src="Images/Raquettes.jpg" alt="Raquettes neige" class="logo1">     
                    <img src="Images/Ski2Fond.jpg" alt="Ski de Fond" class="logo1">   
                    <img src="Images/Yoga.jpg" alt="Pratique Yoga" class="logo1">   
                </div>          
            </div>
        </div>
    </div>
    <script src="cvresp.js"></script>
</body>
</html>

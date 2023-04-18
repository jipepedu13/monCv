// Fonction pour afficher/cacher le bouton "Retour en haut"

window.onscroll = function() {
    var bouton = document.getElementById("retourEnHaut");
    if (window.pageYOffset > 20) {
      bouton.style.display = "block";
    } else {
      bouton.style.display = "none";
    }
  };

  // Fonction pour remonter en haut de la page
  
  function retourEnHaut() {
    window.scrollTo(0, 0);
  }
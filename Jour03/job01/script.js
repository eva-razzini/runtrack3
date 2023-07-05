$(document).ready(function() {
    // Afficher le texte
    $('#afficher').click(function() {
      $('#elementTexte').show();
    });

    // Cacher l'élément
    $('#cacher').click(function() {
      $('#elementTexte').hide();
    });
});
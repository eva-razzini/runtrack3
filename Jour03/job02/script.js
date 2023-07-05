$(document).ready(function() {
    // Méthode de mélange aléatoire des images
    function shuffleImages() {
      var container = $(".rainbow-container");
      var images = container.children();
      while (images.length) {
        container.append(images.splice(Math.floor(Math.random() * images.length), 1)[0]);
      }
    }

    // Méthode de vérification si les images sont en ordre
    function checkOrder() {
      var container = $(".rainbow-container");
      var images = container.children();
      for (var i = 0; i < images.length; i++) {
        if (images[i].id !== "arc" + (i + 1)) {
          return false;
        }
      }
      return true;
    }

    // Action du bouton "Mélanger"
    $("#shuffle").click(function() {
      shuffleImages();
      $("#message").empty();
    });

    // Action de lâcher une image dans le conteneur
    $(".rainbow-container").on("mouseup", "img", function() {
      var container = $(".rainbow-container");
      container.append($(this));
      if (checkOrder()) {
        $("#message").text("Vous avez gagné").removeClass("red").addClass("green");
      } else {
        $("#message").text("Vous avez perdu").removeClass("green").addClass("red");
      }
    });
  });
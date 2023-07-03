<!DOCTYPE html>
<html>
<head>
    <script src="script.js"></script>
</head>
<body>
    <script>
        var nombre1 = 7;
        var nombre2 = 11;
        var somme = sommenombrespremiers(nombre1, nombre2);
        if (somme !== false) {
            console.log("La somme des nombres premiers est : " + somme);
        } else {
            console.log("Au moins l'un des nombres n'est pas premier.");
        }
    </script>
</body>
</html>

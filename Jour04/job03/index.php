<!DOCTYPE html>
<html>
<head>
  <title>Document</title>
  <script src="script.js"></script>
</head>
<body>
  <form id="filterForm">
    <label for="id">ID:</label>
    <input type="text" id="id" name="id">
    <br>
    <label for="name">Nom:</label>
    <input type="text" id="name" name="name">
    <br>
    <label for="type">Type:</label>
    <select id="type" name="type">
      <option value="">Tous</option>
      <option value="Grass">Grass</option>
      <option value="Fire">Fire</option>
      <option value="Water">Water</option>
      <!-- Ajoutez d'autres types si nécessaire -->
    </select>
    <br>
    <input type="button" value="Filtrer" onclick="fetchPokemonData()">
  </form>
  <div id="pokemonList"></div>
</body>
</html>
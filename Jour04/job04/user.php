<?php
$servername = "localhost";
$username = "pma";
$password = "plomkiplomki";
$dbname = "utilisateurs";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $users = array();

  while ($row = $result->fetch_assoc()) {
    $user = array(
      'id' => $row['id'],
      'nom' => $row['nom'],
      'prenom' => $row['prenom'],
      'email' => $row['email']
    );
    $users[] = $user;
  }

  echo json_encode($users);
} else {
  echo "Aucun utilisateur trouvé.";
}

$conn->close();
?>

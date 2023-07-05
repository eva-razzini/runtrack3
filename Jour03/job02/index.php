<!DOCTYPE html>
<html>
<head>
  <title>Arc-en-ciel</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
  <style>
    .rainbow-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    #message {
      text-align: center;
      font-weight: bold;
    }

    .green {
      color: green;
    }

    .red {
      color: red;
    }
  </style>
</head>
<body>
  <div class="rainbow-container">
    <img id="arc1" class="rainbow-image" src="img/arc1.png" alt="Arc-en-ciel 1">
    <img id="arc2" class="rainbow-image" src="img/arc2.png" alt="Arc-en-ciel 2">
    <img id="arc3" class="rainbow-image" src="img/arc3.png" alt="Arc-en-ciel 3">
    <img id="arc4" class="rainbow-image" src="img/arc4.png" alt="Arc-en-ciel 4">
    <img id="arc5" class="rainbow-image" src="img/arc5.png" alt="Arc-en-ciel 5">
    <img id="arc6" class="rainbow-image" src="img/arc6.png" alt="Arc-en-ciel 6">
  </div>
  <button id="shuffle">Mélanger</button>
  <div id="message"></div>
</body>
</html>


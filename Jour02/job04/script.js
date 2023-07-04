document.addEventListener("keydown", function(event) {
    var keylogger = document.getElementById("keylogger");
  
    var letter = event.key.toLowerCase();
  
    if (/[a-z]/.test(letter)) {
      if (document.activeElement === keylogger) {
        keylogger.value += letter + letter;
      } else {
        keylogger.value += letter;
      }
    }
  });  
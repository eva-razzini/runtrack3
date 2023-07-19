document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', fetchData);
  
    function fetchData() {
      fetch('expression.txt')
        .then(response => response.text())
        .then(data => {
          document.getElementById('result').textContent = data;
        })
        .catch(error => console.error(error));
    }
    function jsonValueKey(jsonString, key) {
      const json = JSON.parse(jsonString);
      return json[key];
    }
  });
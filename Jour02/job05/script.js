window.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
  });  
document.getElementById("menuIcon").addEventListener("click", function() {
  toggleMenu();
});

document.getElementById("Button").addEventListener("click", function() {
  toggleMenu();
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

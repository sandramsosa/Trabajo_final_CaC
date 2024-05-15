document
  .getElementById("theme-toggle-btn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });


  //menu responsive
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('show');
  this.classList.toggle('show');
});
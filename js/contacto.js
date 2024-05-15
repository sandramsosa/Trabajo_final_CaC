const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_8f4adip';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Enviado!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('show');
  this.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const alertBtn = document.getElementById('alertButton');

  alertBtn.addEventListener('click', function () {
    alert("¡Gracias por visitar nuestra página! 😄");
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    [nombre, correo, mensaje].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (valid) {
      alert("Formulario enviado correctamente 🎉");
      form.reset();
    }
  });
});

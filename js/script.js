  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

class AnimacionFlotante {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.posicion = 0;
    this.direccion = -1;
    this.iniciar();
  }

  iniciar() {
    setInterval(() => {
      this.posicion += this.direccion;

      if (this.posicion > 30 || this.posicion < -30) {
        this.direccion *= -1;
      }

      // Combinar el centrado con la animación
      this.element.style.transform = `translate(-50%, -50%) translateY(${this.posicion}px)`;
    }, 30);
  }
}

new AnimacionFlotante("imagenFlotante");


document.addEventListener('DOMContentLoaded', function() {

  const whatsappBtn = document.createElement('a');
  whatsappBtn.href = "https://wa.me/1234567890";
  whatsappBtn.className = "whatsapp-float";
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
  whatsappBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
  document.body.appendChild(whatsappBtn);

  const scrollTopBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });
  
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  const mainButton = document.querySelector('.main-button');
  if (mainButton) {
    mainButton.addEventListener('click', function() {
      alert('¡Prepárate para la aventura! Pronto te contactaremos.');
    });
  }


  const subscriptionForm = document.getElementById('subscription-form');
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      alert(`Gracias ${formData.get('name')} por suscribirte!\nHemos enviado un correo a ${formData.get('email')}`);
      this.reset();
    });
  }


  const destinationCards = document.querySelectorAll('.destination-card');
  destinationCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('secondary-button')) {
        const destination = this.querySelector('h3').textContent;
        alert(`Explorando paquetes para ${destination}`);
      }
    });
  });
});
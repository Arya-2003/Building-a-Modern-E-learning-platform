document.addEventListener('DOMContentLoaded', function () {

  const navbar = document.querySelector('.glass-nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const switchFormLink = document.getElementById('switchForm');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const modalTitle = document.getElementById('authModalLabel');

  if (switchFormLink) {
    switchFormLink.addEventListener('click', function (e) {
      e.preventDefault(); 
      const isLoginVisible = !loginForm.classList.contains('d-none');

      if (isLoginVisible) {
        loginForm.classList.add('d-none');
        registerForm.classList.remove('d-none');
        modalTitle.textContent = 'Register';
        switchFormLink.textContent = 'Already have an account? Login';
      } else {
        registerForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
        modalTitle.textContent = 'Login';
        switchFormLink.textContent = 'Don’t have an account? Register';
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset(); 
      });
  }

  if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Login functionality is not implemented yet.');
      });
  }

  if (registerForm) {
      registerForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Registration functionality is not implemented yet.');
      });
  }

});
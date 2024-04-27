const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');
  const signupForm = document.getElementById('signupForm');

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  signupForm.addEventListener('submit', handleSubmit);

  function validateEmail() {
    const email = emailInput.value.trim();
    if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
      emailError.textContent = 'Email is invalid';
    } else {
      emailError.textContent = '';
    }
    updateSuccessMessage();
  }

  function validatePassword() {
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters';
    } else {
      passwordError.textContent = '';
    }
    updateSuccessMessage();
  }

  function updateSuccessMessage() {
    if (emailError.textContent === '' && passwordError.textContent === '') {
      successMessage.textContent = 'All good to go!';
      successMessage.style.color = 'green';
    } else {
      successMessage.textContent = '';
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to sign up?')) {
      alert('Successful signup!');
    } else {
      window.location.reload();
    }
  }

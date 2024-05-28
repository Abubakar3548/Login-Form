document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const firstName = document.querySelector('.firstName');
  const lastName = document.querySelector('.lastName');
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const togglePassword = document.querySelector('.toggle-password');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
  });

  togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
      password.type = 'text';
      togglePassword.textContent = '🙈';
    } else {
      password.type = 'password';
      togglePassword.textContent = '👁️';
    }
  });

  function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

       
       //check first name
    if (firstNameValue === '') {
      setErrorFor(firstName, 'First Name cannot be empty');
    } else {
      setSuccessFor(firstName);
    }
    //check last name

    if (lastNameValue === '') {
      setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
      setSuccessFor(lastName);
    }

    //check email

    if (emailValue === '') {
      setErrorFor(email, 'Email cannot be empty');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }

    //check password

    if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be empty');
    } else {
      setSuccessFor(password);
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.textContent = message;
    input.classList.add('error');
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.textContent = '';
    input.classList.remove('error');
  }

  function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

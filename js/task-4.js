
const form = document.querySelector('.login-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // зупиняє перезавантаження сторінки

    const { email, password } = form.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Перевірка на заповненість полів
    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    form.reset(); // очищення форми
  });
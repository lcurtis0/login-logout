const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      // stringify email and password 
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashbaord');
    } else {
      alert('Failed to log in');
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);



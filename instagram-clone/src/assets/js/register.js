document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('yourFormId'); // Replace with your actual form ID
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailOrUsername = form.querySelector('[name="emailOrUsername"]').value;
      const password = form.querySelector('[name="password"]').value;
      // Add further form handling logic here

      if (emailOrUsername && password) {
        // Process the form submission
        console.log('Form submitted:', { emailOrUsername, password });
      } else {
        console.error('Form fields are missing');
      }
    });
  } else {
    console.error('Form not found');
  }
});

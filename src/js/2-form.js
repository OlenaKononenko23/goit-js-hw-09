document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('.feedback-form');
  if (form) {
    const saveForm = () => {
      const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };

    const loadForm = () => {
      const saveData = localStorage.getItem('feedback-form-state');
      if (saveData) {
        const { email, message } = JSON.parse(saveData);
        form.elements.email.value = email;
        form.elements.message.value = message;
      }
    };

    form.addEventListener('input', saveForm);

    window.addEventListener('load', loadForm);

    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
    
      if (email === '' || message === '') {
        alert('Будь ласка, заповніть обидва поля: email та повідомлення');
        return;
      }
    
      localStorage.removeItem('feedback-form-state');
    
      console.log({
        email,
        message,
      });
    
      form.reset();
    });
  }
});
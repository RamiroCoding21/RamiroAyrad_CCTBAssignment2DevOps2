document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const roleInput = document.getElementById('role');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();
        let isValid = true;
        if (nameInput.value.trim() === '') {
            showError('name-error', 'Name is required.');
            isValid = false;
        }
        if (emailInput.value.trim() === '') {
            showError('email-error', 'Email is required.');
            isValid = false;
        }
        if (roleInput.value.trim() === '') {
            showError('role-error', 'Role is required.');
            isValid = false;
        }
        if (isValid) {
            alert('Form submitted successfully!');
        } else {
            alert('Please check the form and try again.');
        }
    });
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.textContent = '');
    }
});
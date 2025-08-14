document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value.trim();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                messageDiv.className = 'success';
                messageDiv.textContent = data.message;
                form.reset();
            } else {
                messageDiv.className = 'error';
                messageDiv.textContent = data.error;
            }
        } catch (error) {
            messageDiv.className = 'error';
            messageDiv.textContent = 'An error occurred. Please try again later.';
        }
    });
});

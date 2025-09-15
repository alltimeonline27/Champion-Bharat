document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginTitle = document.getElementById('login-title');

    // Get login type from URL (e.g., login.html?type=athlete)
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'athlete';

    // Customize page based on login type
    switch (type) {
        case 'coach':
            loginTitle.innerText = 'Coach & Club Login';
            break;
        case 'govt':
            loginTitle.innerText = 'Government Official Login';
            break;
        default:
            loginTitle.innerText = 'Athlete Login';
            break;
    }

    // Handle form submission (simulation)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        
        // Redirect based on login type
        switch (type) {
            case 'govt':
                window.location.href = 'gov.html'; // Redirect to government dashboard
                break;
            case 'coach':
                alert('Coach & Club dashboard is coming soon!'); // Placeholder for coach login
                break;
            default:
                window.location.href = 'app.html'; // Redirect to the main athlete app
                break;
        }
    });
});
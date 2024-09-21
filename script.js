// Detect user locale and format numbers accordingly
const userLocale = navigator.language || 'en-US';

function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        // Evaluate the expression and format the result for the user's locale
        let result = eval(screen.value);
        screen.value = new Intl.NumberFormat(userLocale).format(result);
    } catch (e) {
        screen.value = 'Error';
    }
}

// Service Worker for Offline Access
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function (error) {
        console.log('Service Worker registration failed:', error);
    });
}

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
}

const btn = document.querySelector('.share');

// Share must be triggered by "user activation"

window.onload = function () {
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData)
            btn.textContent = 'Shared ✅'
        } catch (err) {
            btn.textContent = 'Error: ' + err
        }
    });
}
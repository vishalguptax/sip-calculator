if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
const shareData = {
    title: 'SIP Calculator',
    text: 'Check out this easy Mutual funds SIP Calculator!',
    url: 'https://sipcalculator.herokuapp.com/'
}

const btn = document.querySelector('.share');
btn.addEventListener('click', () => {
    navigator.share(shareData);
});
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
const shareData = {
    title: 'SIP Calculator',
    text: 'Check out this easy Mutual funds SIP Calculator!',
    url: 'http://sipcalculator.herokuapp.com/'
}

const btn = document.querySelector('.share');
 btn.addEventListener('click', async () => {
     try {
         await navigator.share(shareData)
        console.log("App shared");
     } catch (err) {
         console.log(err);
     }
 });
// Java Scripts DOM items

const tab_links = document.querySelectorAll('.tab-links');
const tab_contents = document.querySelectorAll('.tab-contents');
const closeTab = document.querySelector('.fa-xmark');
const hamburgerTab = document.querySelector('.fa-bars');
const navList = document.querySelector('#sidemenu')
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjLJBb4Mg-h2Gerja79VaJI9bnrpZBJYtLXW3QXeNHsuwUNbu8AHwVaB8M4KdFzajK/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#msg')

// Get info to GoogleSheets from Contact From
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
// Functions


// About page tabs
tab_links.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Remove active classes from all tabs
        tab_links.forEach(tabLink => tabLink.classList.remove('active-link'));
        tab_contents.forEach(tabContent => tabContent.classList.remove('active-tab'));

        // Add active classes to the clicked tab
        link.classList.add('active-link');
        tab_contents[index].classList.add('active-tab');
    });
});

// Small Screen Nav Bar
closeTab.addEventListener('click', () => {
    navList.style.right = "-200px";
})
hamburgerTab.addEventListener('click', () => {
    navList.style.right = "0";
})











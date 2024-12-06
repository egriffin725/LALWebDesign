//scroll to specfic date on artists page based on chosen date from index.html, will open in a new tab
const buttons = document.querySelectorAll('.timeline-item');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const scrollToId = button.getAttribute('data-scroll');
        window.open(`artists.html#${scrollToId}`, '_blank');
    });
});

//all links will open in blank tab when clicked
const link = document.querySelector('figcaption a');
link.addEventListener('click', function(event) {
    window.open(link.href, '_blank');
    event.preventDefault();
});

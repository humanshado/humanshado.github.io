window.sr = ScrollReveal();

sr.reveal('.abusman', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('#about h1', {
    duration: 2000,
    delay: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.main-theme', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('#portfolio', {
    duration: 2000,
    viewFactor: 0.2,
    origin: 'bottom'
});

sr.reveal('#blog', {
    duration: 2000,
    viewFactor: 0.2,
    origin: 'bottom'
});

console.log(sr);










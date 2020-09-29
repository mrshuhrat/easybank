var elSiteHeader = document.querySelector('.navbar');
var elSiteWrapper = document.querySelector('.gradient');
var elSiteHeaderToggler = document.querySelector('.toggler');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('navbar-open');
  elSiteWrapper.classList.toggle('gradient-open');
});


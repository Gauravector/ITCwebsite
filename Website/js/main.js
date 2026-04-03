// Contact form validation
function submitForm() {
  var name  = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var msg   = document.getElementById('msg').value;

  if (name === '' || email === '' || msg === '') {
    alert('Please fill all fields!');
    return;
  }

  document.getElementById('success').style.display = 'block';
}
// Highlight the active nav link
// (so "About" looks selected when you're on about.html)
var currentPage = window.location.pathname;
var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
  if (link.href.includes(currentPage)) {
    link.style.fontWeight = 'bold';
    link.style.color = '#EDE7B1';
  }
});
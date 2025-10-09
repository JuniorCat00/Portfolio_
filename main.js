window.onload = function() {
  const links = document.querySelectorAll('#btnLink');
  const currentPage = window.location.pathname.split('/').pop();
//   ลองศึกษาจาก https://www.w3schools.com/js/js_window_location.asp

  links.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

// ลองศึกษาจาก https://www.youtube.com/watch?v=6dsdZaNbI3Q
}

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
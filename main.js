window.onload = function() {
  const links = document.querySelectorAll('#btnLink');
  const currentPage = window.location.pathname.split('/').pop();
//   ลองศึกษาจาก https://www.w3schools.com/js/js_window_location.asp และ https://stackoverflow.com/questions/62319578/issue-when-trying-to-split-url-in-js ไว้สำหรับเช็คดูว่า  html ตรงกับอันไหน

  links.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
// ลองศึกษาจาก https://www.youtube.com/watch?v=6dsdZaNbI3Q
}


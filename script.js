let clickedP;
document.addEventListener('click', function (e) {
  if (clickedP) clickedP.classList.remove('active');
  clickedP = e.target;
  if (clickedP.tagName !== 'P') return;
  clickedP.classList.add('active');
});

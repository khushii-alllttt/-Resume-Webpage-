// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Download Resume as PDF
document.getElementById('downloadBtn').addEventListener('click', () => {
  alert("Your resume will be downloaded!");
  window.print(); // Opens print dialog to save as PDF
});

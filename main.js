const hamburger = document.querySelector('#hamburger');
const sidebar = document.querySelector('.sidebar');
const closeSidebarButton = document.querySelector('.close-sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-active');
});

closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-active');
});

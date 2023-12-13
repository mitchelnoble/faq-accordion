function toggleDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const content = drawer.querySelector('.drawer-content');
  const icon = drawer.querySelector('.closed-icon');

  content.classList.toggle('active');
  
  if (content.classList.contains('active')) {
    icon.src = "assets/images/icon-minus.svg";
  } else {
    icon.src ="assets/images/icon-plus.svg";
  }
}


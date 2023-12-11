function toggleDrawer(button) {
  const drawerNumber = button.getAttribute('data-drawer-icon');
  const drawer = document.querySelector(`.drawer:nth-child(${drawerNumber})`);
  const icon = document.getElementById(`icon${drawerNumber}`);

  if (!drawer) {
    console.error(`Drawer with number ${drawerNumber} not found.`);
    return;
  } else {
    console.log(icon)
  }

  const currentLeft = parseInt(getComputedStyle(drawer).left);

  // Open the selected drawer
  if (currentLeft < 0) {
      drawer.style.left = '0';
      icon.src = 'public/vector1.svg';
    icon.alt = 'See More Button';
    drawer.classList.remove('open');
  } else {
      drawer.style.left = '-250px';
      icon.src = 'assets/images/icon-minus.svg';
    icon.alt = 'See Less Button';
    drawer.classList.add('open');
  }
  console.log("yes");
}
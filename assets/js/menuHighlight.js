document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all menu items
    document.querySelectorAll('.nav a').forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked menu item
    this.classList.add('active');
  });
});
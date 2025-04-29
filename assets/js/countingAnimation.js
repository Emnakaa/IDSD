const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h3 = entry.target;
        const target = +h3.getAttribute('data-target');
        let count = 0;
        const increment = target / 100;
  
        const updateCount = () => {
          count += increment;
          if (count < target) {
            h3.textContent = Math.floor(count) + '+'; // Append the '+' symbol
            requestAnimationFrame(updateCount);
          } else {
            h3.textContent = target + '+'; // Ensure the final value includes '+'
          }
        };
  
        updateCount();
        observer.unobserve(h3); // Stop observing once the animation starts
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.stats-numbers h3').forEach(h3 => {
    observer.observe(h3);
  });
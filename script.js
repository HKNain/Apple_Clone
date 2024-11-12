    const navbar = document.getElementById("navbar");

// Add event listeners for mouseover and mouseout
  navbar.addEventListener("mouseover", () => {
    navbar.style.height = "10vw";
  });

  navbar.addEventListener("mouseout", () => {
    navbar.style.height = "2.75vw";
  });

    window.addEventListener("scroll", () => {
        const container = document.querySelector('#navbar');
        const stickyPoint = container.offsetTop;
        const scrollPosition = window.scrollY;

// Toggle position based on scroll
    if (scrollPosition > stickyPoint) {
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
    } else {
      navbar.style.position = 'absolute';
    }
  });
  
  function openPage() {
    window.location.href = "index-store.html"; // Replace with your target URL
}